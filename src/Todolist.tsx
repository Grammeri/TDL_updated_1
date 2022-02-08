import React, {ChangeEvent, KeyboardEvent} from "react";
import {Button} from "./Components/Button";
import styles from "./Todolist.module.css"
import {MapForTDL} from "./Components/Map";

export type PropsType = {
    title?:string
    name?:string
    tasks: Array<TaskType>
    removeTask:(taskId:string)=>void
    filterChange:(value:FilterType)=>void
    addTask:(value:string)=>void
    filter:FilterType
   }

export type TaskType = {
    id:string,
    title: string,
    isDone: boolean,
 }

export type FilterType = "all" | "active" | "completed"

export const Todolist = (props:PropsType) => {
    let [taskTitle, setTaskTitle]=React.useState("")
    let [error, setError]=React.useState(false)

    const onTextChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if(taskTitle!=="")
            props.addTask(taskTitle)
            setTaskTitle("")
        }
    }
    const addTask = () => {
        if (taskTitle !== "") {
            props.addTask(taskTitle.trim())
            setTaskTitle("")
        } else {
            setError(true)
        }
    }
    const setFilterHander = (value: FilterType) => {
        props.filterChange(value)
    }
    const removeTaskHandler = (Id:string)=> {
        props.removeTask(Id)
    }

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
                       className={error ? styles.error : ""}
                />
                <button  onClick={addTask}>+</button>
                {error && <div className={styles.errorMessage}>Must be completed!</div>}
                <MapForTDL tasks={props.tasks} removeTaskHandler={removeTaskHandler}/>

                <div>
                    <Button name={"all"} callback={()=>setFilterHander("all")} styleForBtn={props.filter} />
                    <Button name={"active"} callback={()=>setFilterHander("active")} styleForBtn={props.filter}/>
                    <Button name={"completed"} callback={()=>setFilterHander("completed")} styleForBtn={props.filter}/>

                </div>
            </div>
        </div>
    )
}