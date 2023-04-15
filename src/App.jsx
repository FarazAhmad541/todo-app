import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import "./App.css";
import CreateListModal from "./components/CreateListModal";
import TasksList from "./components/TasksList";
import TasksCategoryList from "./components/TasksCategoryList";
import LoginComponent from "./components/LoginComponent";

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  // State for the list of tasks
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  // State for whether the task list is open or closed
  const [isTaskListOpen, setIsTaskListOpen] = useState(false);

  // Effect hook to update local storage when tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to create a new tasks list
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
      {!isUserSignedIn ? (
        <LoginComponent setIsUserSignedIn={setIsUserSignedIn} />
      ) : (
        <div className="main-container">
          {/* Conditional rendering of the TasksList component */}
          {isTaskListOpen === true ? (
            <TasksList
              tasksList={tasks}
              setTasks={setTasks}
              setIsTaskListOpen={setIsTaskListOpen}
            />
          ) : (
            // Fragment with the CreateListModal and TasksCategoryList components
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
    </>
  );
}

export default App;
