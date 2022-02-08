import React from 'react';
import {TaskType} from "../Todolist";

type MapForTDLPropsType = {
    tasks: Array<TaskType>
    removeTaskHandler:(Id:string)=>void
}

export const MapForTDL = (props: MapForTDLPropsType) => {
    return (
        <ul>
            {props.tasks.map(m => {

                return (<li><input type={"checkbox"}
                                   checked={m.isDone}/>{m.title}
                     <span><button onClick={()=>props.removeTaskHandler(m.id)}>X</button></span>
                </li>)
            })}
        </ul>
    );
};

