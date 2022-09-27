import React, { useState, useEffect} from "react";
import { Task } from "./Task.jsx";

//create your first component
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const url = "https://assets.breatheco.de/apis/fake/todos/user/danielmoret"

  async function getTodo(){
    try {
      const response = await fetch(url);
      if(!response.ok){
        const body = await response.json();
        if(body.msg.includes("first call the POST method")){
          createNewTodo()
          return
        }
      }else{
        const body = await response.json();
        if(body[0].label !== "sample task"){
          setTasks(body);
        }
      }
    } catch (error) {
        console.error(error)
    }
  }

  async function createNewTodo(){
    const response = await fetch(url,{
      method: "POST",
      body: JSON.stringify([]),
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  async function updateTodo(tasks){
    const response = await fetch(url,{
      method: "PUT",
      body: JSON.stringify(tasks),
      headers: {
        "Content-Type": "application/json",
      }
    })

    getTodo();


  }

  async function deleteTodo(){
    try {
      const response = await fetch(url,{
        method: "DELETE",
        headers:{
          'Content-Type': 'application/json'
          }
      })
      setTasks([]);
      getTodo()
      
    } catch (error) {
      console.error(error)
    }
  }

 useEffect(()=>{
  getTodo();
 },[])

 
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
              const todo = [...tasks, {label: taskName, done:false}]
              updateTodo(todo)
              setTaskName("");
            }
          }}
        />

        {tasks.map((task, index) => {
          return <Task key={index} task={task} tasks={tasks} id={index} updateTodo={updateTodo} 
          deleteTodo={deleteTodo}/>;
        })}
        <span className="item-left">{tasks.length > 0 ? tasks.length+" item left" : "No tasks, add a task"}</span>
      </div>
      <button className="btn-clear" onClick={ (event) => deleteTodo(tasks) }>Clear todo</button>
    </React.Fragment>
  );
};

export default Home;
