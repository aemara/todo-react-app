import React from 'react'
import { useState } from 'react'
import { generateID } from '../utlities';

const IDsDischarged = [];

const TodoInput = ({addTodoItem, todoList}) => {
    const [input, setInput] = useState('');
    

    const handleEnterPress = (e) => {
        if(e.key === "Enter") {
            let newId = generateID();

            while(IDsDischarged.includes(newId)) {
                newId = generateID();
            }
            IDsDischarged.push(newId);
            addTodoItem(newId,input,false);
            setInput('');
        }
    }

    

    return (
        <div className="todo-input container">
            <input type="text" value ={input} onChange = {e => setInput(e.target.value)} onKeyPress={handleEnterPress} className="todo-input-text" placeholder="Write your todo then press Enter..."></input>
        </div>
    )
}

export default TodoInput
