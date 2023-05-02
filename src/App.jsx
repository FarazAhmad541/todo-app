import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import "./App.css";
import CreateListModal from "./components/CreateListModal";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import TasksCategoryList from "./components/TasksCategoryList";
import TasksList from "./components/TasksList";
import { auth } from "./firebaseConfig";

// import AccountMenu from "./components/AccountMenu.jsx";

function App() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [isTaskListOpen, setIsTaskListOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function createTasksList(listname) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: nanoid(),
        isOpen: false,
        listname: listname,
        tasks: [],
      },
    ]);
  }

  function Navbar() {
    if (user) {
      return (
        <div className="navbar">
          <h2 style={{ margin: 0 }}>
            {user?.displayName || user?.email?.split("@")[0]}
          </h2>
          <button onClick={signOut} className="logout-btn">
            Logout
          </button>
        </div>
      );
    }
  }

  return (
    <>
      <Navbar />
      <div className="main-container">
        {!user ? (
          <div>
            {/* <h4 style={{ width: "70%", textAlign: "left" }}>
              Sign In to yout existing account or create a new one
            </h4> */}
            {isSignUpMode ? (
              <Signup setIsSignUpMode={setIsSignUpMode} />
            ) : (
              <Signin setIsSignUpMode={setIsSignUpMode} />
            )}
          </div>
        ) : (
          <div>
            {isTaskListOpen === true ? (
              <TasksList
                tasksList={tasks}
                setTasks={setTasks}
                setIsTaskListOpen={setIsTaskListOpen}
              />
            ) : (
              <>
                <CreateListModal createTasksList={createTasksList} />
                <div className="spacer"></div>
                <TasksCategoryList
                  tasks={tasks}
                  setTasks={setTasks}
                  isTaskListOpen={isTaskListOpen}
                  setIsTaskListOpen={setIsTaskListOpen}
                />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
