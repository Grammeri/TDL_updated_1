import React, {useState} from "react";
import "./App.css"
import {FilterType, TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";


const App = () => {

    let [tasks, setTasks]=useState<Array<TaskType>>([
        {id:v1(), title:"HTML&CSS", isDone:false},
        {id:v1(), title:"JS", isDone:true},
        {id:v1(), title:"React", isDone:false},
    ])

    let[filter, setFilter]=useState<FilterType>('all')

    const addTask = (value:string) => {
      let task = {id:v1(), title:value, isDone:false}
        let newTasks = [task,...tasks]
        setTasks(newTasks)
    }

    const removeTask = (taskId: string) => {
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
                      addTask={addTask}
                      filter={filter}
            />
        </div>
    )
}

export default App //App requires default export only!

