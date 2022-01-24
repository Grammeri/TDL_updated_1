import React from "react";
import {FilterValues} from "./App";

export type PropsType = {
    title:string
    tasks: Array<taskType>
    removeTask:(taskId:number)=>void
    changeFilter:(value:FilterValues)=>void
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
                </div>
                <input/>
                <button>+</button>
                    <ul>
                        {props.tasks.map((m, i) => {

                            return (<li key={i}><input type={"checkbox"} checked={m.isDone}/>{m.title}
                            <span><button onClick={()=>{props.removeTask(m.id)}}>X<span/></button></span></li>)
                        })}
                    </ul>
                <div>
                    <button onClick={()=>{props.changeFilter("all")}}>All</button>
                    <button onClick={()=>{props.changeFilter("active")}}>Active</button>
                    <button onClick={()=>{props.changeFilter("completed")}}>Completed</button>

                </div>
            </div>
        </div>
    )
}