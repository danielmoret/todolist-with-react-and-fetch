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
              <span>{props.task}</span>
              <span 
              className={activeButton ? "red" : "disabled"}
              onClick={(event) => 
                {
            
                props.setTasks(props.tasks.filter((task, index) => index !== props.id)
              )}}>X</span>
            </div>
        )
}