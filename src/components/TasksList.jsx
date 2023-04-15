import React, { useState } from "react";
import { nanoid } from "nanoid";
import Task from "./Task";

export default function TasksList(props) {
  const [taskInputText, setTaskInputText] = useState("");
  const { tasksList, setTasks, setIsTaskListOpen } = props;

  const [list] = tasksList.filter((list) => list.isOpen);

  function handleChange(e) {
    setTaskInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (taskInputText.trim() !== "") {
      const newTasksListArray = tasksList.map((item) => {
        if (item.id === list.id) {
          return {
            ...list,
            tasks: [
              ...list.tasks,
              {
                id: nanoid(),
                isChecked: false,
                taskname: taskInputText.trim(),
              },
            ],
          };
        } else {
          return item;
        }
      });
      setTaskInputText("");
      setTasks(newTasksListArray);
    } else {
      alert("The 'Task' name cannot be an empty string");
    }
  }

  function handleBackFunctionality() {
    const closeTasksList = tasksList.map((item) => {
      return {
        ...item,
        isOpen: false,
      };
    });
    setTasks(closeTasksList);
    setIsTaskListOpen(false);
  }

  return (
    <>
      <div onClick={handleBackFunctionality} className="close-tasklist-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
        </svg>
      </div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskInputText}
          placeholder="Add New Task"
          onChange={handleChange}
        />
        <button className="add-btn" onClick={handleSubmit}>
          Add New Task
        </button>
      </form>
      <div className="spacer"></div>
      {list.tasks.length === 0 ? (
        <p>Currently there are no Tasks in this list</p>
      ) : (
        <div>
          {list.tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              setTasks={setTasks}
              tasksArray={tasksList}
            />
          ))}
        </div>
      )}
    </>
  );
}
