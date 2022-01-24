import React from "react";
import "./App.css"
import {taskType, Todolist} from "./Todolist";

export type FilterValues = "all" | "active" | "completed"

const App = () => {
    const result = React.useState([ //можно не импортировать useState
        {id:1, title:"HTML&CSS", isDone:true},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"React", isDone:false},
    ]) // то что вернет функция мы положим в переменную result

        //result[1]() можем записать так, но выглядит странно
    //result[0] если хотим посмотреть данные

    const setTasks = result[1]
    const tasks = result[0]

        //За счет деструктуризирующего присваивания получаем:
    
/*     const [tasks,setTasks]= useState([
         {id:1, title:"HTML&CSS", isDone:true},
         {id:2, title:"JS", isDone:true},
         {id:3, title:"React", isDone:false},
     ])*/

    const removeTask=(taskId:number)=>{
        setTasks(tasks.filter(f=>f.id!==taskId))
    }
    return (
        <div className={"App"}>
            <Todolist title={"What to learn"}
                      tasks={tasks}
                      removeTask={removeTask}
            />
        </div>
    )
}
export default App

