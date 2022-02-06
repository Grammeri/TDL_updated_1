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

    const onTextChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.addTask(taskTitle)
            setTaskTitle("")
        }
    }
    const addTask = () => {
        props.addTask(taskTitle)
        setTaskTitle("")
    }
    const setFilterHander = (value: FilterType) => {
        props.filterChange(value)
    }
    const removeTaskHandler = (Id:string)=> {
        props.removeTask(Id)
    }

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

                        return (<li><input type={"checkbox"} checked={m.isDone}/>{m.title}
                           {/* <span><button onClick={()=>removeTaskHandler(m.id)}>X</button></span>*/}
                            <Button callback={()=>removeTaskHandler(m.id)} name={"x"}/>
                           </li>)

                    })}
                </ul>
                <div>
                    <Button name={"all"} callback={()=>setFilterHander("all")}/>
                    <Button name={"active"} callback={()=>setFilterHander("active")}/>
                    <Button name={"complete"} callback={()=>setFilterHander("completed")}/>

                </div>
            </div>
        </div>
    )
}