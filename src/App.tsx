import React, {useState} from "react";
import "./App.css"
import {FilterType, TaskType, Todolist} from "./Todolist";


const App = () => {

    let [tasks, setTasks]=useState<Array<TaskType>>([
        {id:1, title:"HTML&CSS", isDone:false},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"React", isDone:false},
    ])

    let[filter, setFilter]=useState<FilterType>('all')

    const removeTask = (taskId: number) => {
        tasks = tasks.filter(f => f.id !== taskId)
        setTasks(tasks)
    }
    const filterChange=(value:FilterType)=>{
        setFilter(value)
    }

    let filteredTasks=tasks
    if(filter==="completed"){
        filteredTasks = tasks.filter(f=>f.isDone===true)
    }
    if (filter==="active"){
        filteredTasks=tasks.filter(f=>f.isDone===false)
    }

    return (
        <div className={"App"}>
            <Todolist title={"What to learn"}
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      filterChange={filterChange}
            />
        </div>
    )
}

export default App //App requires default export only!

