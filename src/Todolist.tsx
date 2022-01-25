import React from "react";
import {FilterType} from "./App";
import {AllButton} from "./Button";

export type PropsType = {
    title?:string
    name?:string
    tasks: Array<taskType>
    removeTask:(taskId:number)=>void
    changeFilter:(value:FilterType)=>void
   }

export type taskType = {
    id:number,
    title: string,
    isDone: boolean,
}

export const Todolist = (props:PropsType) => {
    return (
        <div>
            <div>
                <div>
                    <h3>{props.title}</h3>
                    <h3>{props.name}</h3>
                </div>
                <input/>
                <button>+</button>
                    <ul>
                        {props.tasks.map(m => {

                            return (<li key={m.id}><input type={"checkbox"} checked={m.isDone}/>{m.title}
                            <span><button onClick={()=>{props.removeTask(m.id)}}>X<span/></button></span></li>)
                        })}
                    </ul>
                <div>

                    <AllButton changeFilter={props.changeFilter}/>

                    <button onClick={()=>{props.changeFilter("active")}}>Active</button>
                    <button onClick={()=>{props.changeFilter("completed")}}>Completed</button>
                </div>
            </div>
        </div>
    )
}