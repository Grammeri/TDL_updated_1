import React from 'react';
import {FilterValuesType} from "./App";

type ButtonPropsType = {
    title: string
    addTask:(value:string)=>void
    setTitle: (value:string) => void
}


export const Button = (props:ButtonPropsType) => {

    const addTaskHandler = () => {
        props.addTask(props.title)
        props.setTitle("")
    }
    return (
        <button onClick={addTaskHandler}>+</button>
    );
};

