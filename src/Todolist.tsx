import React from "react";


export type PropsType = {
    title:string
    tasks: Array<taskType>
    removeTask:(taskId:number)=>void
}

export type taskType = {
    id:number,
    title: string,
    isDone: boolean,
}

export const Todolist = (props:PropsType) => {
    return (
        <div className={"todolist"}>
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
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>

                </div>
            </div>
        </div>
    )
}