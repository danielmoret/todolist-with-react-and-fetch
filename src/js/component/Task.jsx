import React, { useState } from "react";

export function Task(props){

        const [activeButton, setActiveButton] = useState(false);
        return(
            <div 
                key={props.index} 
                className="tarea"
                onMouseOver={(event) => {
                    setActiveButton(true)
                }}
                onMouseOut={(event) => {
                    setActiveButton(false)
                }}
                >
              <span>{props.task.label}</span>
              <span 
              className={activeButton ? "red" : "disabled"}
              onClick={(event) => 
                {
                  let array = props.tasks.filter((task, index) => index !== props.id)
                  if(array.length === 0){
                    props.deleteTodo()
                  }else{
                    props.updateTodo(array)
                  }
              }}>X</span>
            </div>
        )
}