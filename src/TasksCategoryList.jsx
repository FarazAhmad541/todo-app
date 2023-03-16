import React from "react";
import { useEffect } from "react";

export default function TasksCategoryList(props) {
  const { tasks, setTasks, setIsTaskListOpen } = props;

  function handleClick(id) {
    const newList = tasks.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          isOpen: true,
        };
      } else {
        return {
          ...list,
          isOpen: false,
        };
      }
    });
    setTasks(newList);
    setIsTaskListOpen(true);
  }

  function deleteList(id) {
    const updatedLists = tasks.filter((list) => list.id !== id);
    setTasks(updatedLists);
  }

  const tasksListElement = tasks.map((list) => {
    return (
      <div key={list.id}>
        <div className="tasks-list">
          <div
            onClick={() => handleClick(list.id)}
            className="tasks-list-heading"
          >
            <h3>{list.listname}</h3>
          </div>
          <button onClick={() => deleteList(list.id)}>Delete List</button>
        </div>
      </div>
    );
  });
  return <div>{tasksListElement}</div>;
}
