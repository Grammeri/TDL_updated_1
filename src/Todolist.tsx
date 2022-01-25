import React, {ChangeEvent, KeyboardEvent} from "react";

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
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>)=>{if(e.charCode===13){
        props.addTask(taskTitle)
        setTaskTitle("")
    }}
    const addTask = () => {props.addTask(taskTitle)
    setTaskTitle("")}
    const onAllBtnClick = () =>{props.filterChange("all")}
    const onCompletedBtnClick = () =>{props.filterChange("completed")}
    const onActiveBtnClick = () =>{props.filterChange("active")}

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
                    <button onClick={onAllBtnClick}>All</button>
                    <button onClick={onActiveBtnClick}>Active</button>
                    <button onClick={onCompletedBtnClick}>Completed</button>
                </div>
            </div>
        </div>
    )
}