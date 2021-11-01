import React from 'react'
import { useState } from 'react'
import { generateID } from '../utlities';

const IDsDischarged = [];

const TodoInput = ({addTodoItem, theme}) => {
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
      <div
        className="todo-input container"
        style={theme === "dark" ? { background: "#25273D" } : {}}
      >
        <input
          className="todo-input-text"
          type="text"
          style={
            theme === "dark" ? { background: "#25273D", color: "#767992" } : {}
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleEnterPress}
          placeholder="Write your todo then press Enter..."
        ></input>
      </div>
    );
}

export default TodoInput
