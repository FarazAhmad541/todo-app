import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import "./App.css";
import CreateListModal from "./CreateListModal";
import TasksList from "./TasksList";
import TasksCategoryList from "./TasksCategoryList";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
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
  );
}

export default App;
