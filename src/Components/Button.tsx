import React from 'react';
import {FilterType} from "../Todolist";

type ButtonPropsType = {
    callback:()=>void
    name:string
    }

export const Button = (props:ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

