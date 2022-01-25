import React from "react";
import {FilterType} from "./App";


type PropsType = {
    changeFilter:(value:FilterType)=>void
}

export const AllButton = (props:PropsType) =>{
    const onClickHandler =()=>props.changeFilter("all")
        return (
        <button onClick={onClickHandler}>All</button>
        )
}