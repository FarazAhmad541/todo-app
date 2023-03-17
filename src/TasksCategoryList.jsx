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
          <div className="remove-icon" onClick={() => deleteList(list.id)}>
            <svg viewBox="0 0 14 18">
              <g
                fill="none"
                fillRule="evenodd"
                id="Page-1"
                stroke="none"
                strokeWidth="1"
              >
                <g
                  fill="#ff3f5b"
                  id="Core"
                  transform="translate(-299.000000, -129.000000)"
                  className="svg-icon"
                >
                  <g id="delete" transform="translate(299.000000, 129.000000)">
                    <path
                      d="M1,16 C1,17.1 1.9,18 3,18 L11,18 C12.1,18 13,17.1 13,16 L13,4 L1,4 L1,16 L1,16 Z M14,1 L10.5,1 L9.5,0 L4.5,0 L3.5,1 L0,1 L0,3 L14,3 L14,1 L14,1 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  });
  return <div>{tasksListElement}</div>;
}
