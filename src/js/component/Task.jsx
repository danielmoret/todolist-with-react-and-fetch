import React, { useState } from "react";

export function Task(props) {
  const [activeButton, setActiveButton] = useState(false);
  return (
    <React.Fragment>
      {!props.task.done ? (
        <div
          key={props.index}
          className="tarea"
          onMouseOver={(event) => {
            setActiveButton(true);
          }}
          onMouseOut={(event) => {
            setActiveButton(false);
          }}
        >
          <span>{props.task.label}</span>
          <span
            className={activeButton ? "red" : "disabled"}
            onClick={(event) => {
              let tasksFilter = props.tasks.filter(
                (task, index) => index !== props.id
              );
              if (tasksFilter.length === 0) {
                props.updateTodo([{ label: "sample task", done: true }]);
              } else {
                props.updateTodo(tasksFilter);
              }
            }}
          >
            X
          </span>
        </div>
      ) : null}
    </React.Fragment>
  );
}
