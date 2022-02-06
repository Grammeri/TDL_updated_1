import React, {useState} from 'react';
import {FilterValuesType} from './App';
import Input from "./Input/Input";
import {Button} from "./Button";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (value: FilterValuesType) => void
    addTask:(value:string)=>void
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState ("")

    /*    let [title, setTitle] = useState ("")

    const addTaskHandler = () => {
        props.addTask(title)
        setTitle("")
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) =>{
        if(e.key==="Enter"){
            props.addTask(title)
            setTitle("")
        }
    }*/


    return <div>
        <h3>{props.title}</h3>
        <div>
            <Input addTask={props.addTask}
                   title={title}
                   setTitle={setTitle}/>
            <Button title={title}
                    setTitle={setTitle}
                    addTask={props.addTask}
            />
            {/*            <input value={title}
                   onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTaskHandler}>+</button>*/}
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                </li>)
            }
        </ul>
        <div>
            <button onClick={ () => { props.changeFilter("all") } }>
                All
            </button>
            <button onClick={ () => { props.changeFilter("active") } }>
                Active
            </button>
            <button onClick={ () => { props.changeFilter("completed") } }>
                Completed
            </button>
        </div>
    </div>
}



