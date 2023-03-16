import React from 'react'

export default function prevfile() {
    const { tasks, setTasks } = props;

    function removeTask(id) {
      const filteredTasks = tasks.filter((element) => element.id !== id);
      setTasks(filteredTasks);
    }
    
    function handleCheckbox(id) {
      const newTasksArray = tasks.map((element) => {
        if (element.id === id) {
          return {
            ...element,
            isChecked: !element.isChecked,
          };
        } else {
          return element;
        }
      });
      setTasks(newTasksArray);
    }
    
    const taskElements = tasks.map((element) => (
      <div
        key={element.id}
        className={element.isChecked ? "task-completed" : "task"}
      >
        <input
          type="checkbox"
          className="checkbox"
          onChange={() => handleCheckbox(element.id)}
          checked={element.isChecked}
        />
        <div className={element.isChecked && "marked-through"}>{element.task}</div>
        <div className="remove-icon" onClick={() => removeTask(element.id)}>
          <svg viewBox="0 0 14 18">
            <g
              fill="none"
              fill-rule="evenodd"
              id="Page-1"
              stroke="none"
              stroke-width="1"
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
    ));
    return <div>{taskElements}</div>;
}



