import React, {useState} from "react";
import "./App.css"
import {taskType, Todolist} from "./Todolist";

export type FilterValues = "all" | "active" | "completed"


const App = () => {

    let[tasks,setTasks]=useState<Array<taskType>>([
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"React", isDone:false},
    ])
    let [filter,setFilter]=useState<FilterValues>("all")

    const removeTask=(taskId:number)=>{
        //let resultTasks=tasks.filter(f=>f.id!==taskId)
        //setTasks(resultTasks)
        setTasks(tasks.filter(f=>f.id!==taskId))
    }

   let filteredTasks = tasks
    if(filter==="completed") {
        filteredTasks = tasks.filter(f => !f.isDone)
    }
    if(filter==="active") {
        filteredTasks = tasks.filter(f => f.isDone)
    }
    const changeFilter = (value:FilterValues) =>{
        setFilter(value)
    }
    return (
        <div className={"App"}>
            <Todolist title={"What to learn"}
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    )
}

export default App //App requires default export only!

