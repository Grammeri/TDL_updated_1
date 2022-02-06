import React, {ChangeEvent, KeyboardEvent} from "react";
import {Button} from "./Components/Button";

export type PropsType = {
    title?:string
    name?:string
    tasks: Array<TaskType>
    removeTask:(taskId:string)=>void
    filterChange:(value:FilterType)=>void
    addTask:(value:string)=>void
   }

export type TaskType = {
    id:string,
    title: string,
    isDone: boolean,
}

export type FilterType = "all" | "active" | "completed"

export const Todolist = (props:PropsType) => {

    const onTextChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{setTaskTitle(e.currentTarget.value)}
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>)=>{if(e.key==="Enter"){
        props.addTask(taskTitle)
        setTaskTitle("")
    }}
    const addTask = () => {props.addTask(taskTitle)
    setTaskTitle("")}


    let [taskTitle, setTaskTitle]=React.useState("")
    return (
        <div>
            <div>
                <div>
                    <h3>{props.title}</h3>
                    <h3>{props.name}</h3>
                </div>
                <input value={taskTitle}
                       onChange={onTextChangeHandler}
                onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
                <ul>
                    {props.tasks.map(m => {
                        const removeTask = () => {
                            props.removeTask(m.id)
                        }
                        return (<li><input type={"checkbox"} checked={m.isDone}/>{m.title}
                            <span><button onClick={removeTask}>X</button></span></li>)
                    })}
                </ul>
                <div>
                    <Button name={"all"} callback={props.filterChange}/>
                    <Button name={"active"} callback={props.filterChange}/>
                    <Button name={"completed"} callback={props.filterChange}/>

{/*                    <button onClick={()=>{props.filterChange("all")}}>All</button>
                    <button onClick={()=>{props.filterChange("active")}}>Active</button>
                    <button onClick={()=>{props.filterChange("completed")}}>Completed</button>*/}
                </div>
            </div>
        </div>
    )
}