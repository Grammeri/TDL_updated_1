import React from 'react';
import {FilterType} from "../Todolist";

type ButtonPropsType = {
    callback:(value:FilterType)=>void
    name:FilterType
}

export const Button = (props:ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback(props.name)
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

