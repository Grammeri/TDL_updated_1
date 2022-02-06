import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    title: string
    setTitle: (value:string) => void
    addTask:(value:string)=>void
}


const Input = (props:InputPropsType) => {
    /*let [title, setTitle] = useState ("")*/

    /*const addTaskHandler = () => {
        props.addTask(props.title)
        props.setTitle("")
    }*/
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) =>{
        if(e.key==="Enter"){
            props.addTask(props.title)
            props.setTitle("")
        }
    }
    return (
        <input value={props.title}
               onChange={onChangeHandler}
               onKeyPress={onKeyPressHandler}/>
    );
};

export default Input;