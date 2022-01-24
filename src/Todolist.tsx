import React from "react";

export type PropsType = {
    title?:string
    name?:string
    tasks: Array<TaskType>
    removeTask:(taskId:number)=>void
    filterChange:(value:FilterType)=>void
   }

export type TaskType = {
    id:number,
    title: string,
    isDone: boolean,
}

export type FilterType = "all" | "active" | "completed"

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
                        return (<li><input type={"checkbox"} checked={m.isDone}/>{m.title}
                            <span><button onClick={() => {
                                props.removeTask(m.id)
                            }}>X</button></span></li>)
                    })}
                </ul>
                <div>
                    <button onClick={()=>{props.filterChange("all")}}>All</button>
                    <button onClick={()=>{props.filterChange("active")}}>Active</button>
                    <button onClick={()=>{props.filterChange("completed")}}>Completed</button>
                </div>
            </div>
        </div>
    )
}