import React from "react";

export default function Task(props) {
  const { task, setTasks, tasksArray } = props;

  function handleCheckbox(id) {
    const updatedTasks = tasksArray.map((item) => {
      return {
        ...item,
        tasks: item.tasks.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              isChecked: !task.isChecked,
            };
          } else {
            return task;
          }
        }),
      };
    });
    setTasks(updatedTasks);
  }

  function removeTask(id) {
    const updatedTasks = tasksArray.map((item) => {
      return {
        ...item,
        tasks: item.tasks.filter((task) => task.id !== id),
      };
    });
    setTasks(updatedTasks);
  }

  const taskElements = (
    <div key={task.id} className={task.isChecked ? "task-completed" : "task"}>
      <input
        type="checkbox"
        className="checkbox"
        onChange={() => handleCheckbox(task.id)}
        checked={task.isChecked}
      />
      <div className={task.isChecked ? "marked-through" : undefined}>
        {task.taskname}
      </div>
      <div className="remove-icon" onClick={() => removeTask(task.id)}>
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
  );
  return <div className="tasks-container">{taskElements}</div>;
}
