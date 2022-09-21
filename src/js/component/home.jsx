import React, { useState } from "react";
import { Task } from "./Task.jsx";

//create your first component
const Home = () => {
  const [tasks, setTasks] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog",
  ]);
  const [taskName, setTaskName] = useState("");

  return (
    <React.Fragment>
      <h1>todos</h1>
      <div className="tareas">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={taskName}
          onChange={(event) => {
            setTaskName(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
			  if(taskName.trim() === "") return 
              setTasks([...tasks, taskName]);
              setTaskName("");
            }
          }}
        />

        {tasks.map((task, index) => {
          return <Task key={index} task={task} tasks={tasks} setTasks={setTasks} id={index}/>;
        })}
        <span className="item-left">{tasks.length > 0 ? tasks.length+" item left" : "No tasks, add a task"}</span>
      </div>
    </React.Fragment>
  );
};

export default Home;
