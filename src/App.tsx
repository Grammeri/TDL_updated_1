import React from "react";
import "./App.css"
import {Todolist} from "./Todolist";

export type FilterType = "all" | "completed" | "active"

const App = () => {

    let [tasks, setTasks] = React.useState([
        {id: 1, title: "HTML&CSS", isDone: false},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ])

    let[filter, setFilter]=React.useState<FilterType>("all")

    const removeTask=(taskId:number)=>{
      setTasks(tasks.filter(f=>f.id!==taskId))
    }

    let tasksForTdl = tasks
    if(filter === "completed") {
        tasksForTdl = tasks.filter(f => f.isDone)
    }
        if(filter === "active"){
            tasksForTdl=tasks.filter(f=>!f.isDone)
    }

        const changeFilter = (value:FilterType)=>{
            setFilter(value)
        }

    return (
        <div className={"App"}>
            <Todolist title={"What to learn"}
                      tasks={tasksForTdl}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    )
}

export default App //App requires default export only!

