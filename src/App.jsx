import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import "./App.css";
import CreateListModal from "./components/CreateListModal";
import TasksList from "./components/TasksList";
import TasksCategoryList from "./components/TasksCategoryList";
// import LoginComponent from "./components/LoginComponent";
// import AccountMenu from "./components/AccountMenu.jsx";

function App() {
  // const [isUserSignedIn, setIsUserSignedIn] = useState(false);

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

  return (
    <>
      <div className="main-container">
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
    </>
  );
}

export default App;
