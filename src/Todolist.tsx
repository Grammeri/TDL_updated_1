import React from "react";

export type PropsType = {
    title?:string
    name?:string
    arrForTodolist1: Array<taskType>
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

{/*                        <li><input type={"checkbox"} checked={true}/>HTML&CSS</li>
                        <li><input type={"checkbox"} checked={false}/>JS</li>
                        <li><input type={"checkbox"} checked={true}/>React JS</li>*/}

{/*                        <li><input type={"checkbox"}
                                   checked={props.arrForTodolist1[0].isDone}/>{props.arrForTodolist1[0].title}</li>
                        <li><input type={"checkbox"}
                                   checked={props.arrForTodolist1[1].isDone}/>{props.arrForTodolist1[1].title}</li>
                        <li><input type={"checkbox"}
                                   checked={props.arrForTodolist1[2].isDone}/>{props.arrForTodolist1[2].title}</li>*/}

                        {props.arrForTodolist1.map(m => {
                            debugger
                            return (<li><input type={"checkbox"} checked={m.isDone}/>{m.title}
                            <span><button>X<span/></button></span></li>)
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