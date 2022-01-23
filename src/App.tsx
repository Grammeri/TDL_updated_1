import React from "react";
import "./App.css"
import {Todolist} from "./Todolist";

const App = () => {

    let arrForTodolist1 = [
        {id:1, title:"HTML&CSS", isDone:false},
        {id:2, title:"JS", isDone:true},
        {id:3, title:"React", isDone:false},
    ]

/*    let arrForTodolist2 = [
        {id:1, title:"HTML&CSS222", isDone:true},
        {id:2, title:"JS222", isDone:false},
        {id:3, title:"React222", isDone:true},
    ]*/

    const RemoveTask=()

    return (
        <div className={"App"}>
            <Todolist title={"What to learn"}
                      arrForTodolist1={arrForTodolist1}
            />
           {/* <Todolist name={"What to teach"}
                      arrForTodolist1={arrForTodolist2}*/}
            />
        </div>
    )
}

export default App //App requires default export only!

