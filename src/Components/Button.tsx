import React from 'react';
import {FilterType} from "../Todolist";
import styles from "../Todolist.module.css"

type ButtonPropsType = {
    callback:()=>void
    name:string
    styleForBtn?:FilterType
}

export const Button = (props:ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button className={props.styleForBtn === props.name ? styles.coloredButtons : ""}
                onClick={onClickHandler}>{props.name}</button>
    );
};

