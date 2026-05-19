import React, { useState } from 'react'

export const TodoInput = ({ setarr, arr }) => {
    const [todoItem, setTodoItem] = useState(null);
    // console.log(arr, 'dlkidljv');


    const handleUserInput = (e) => {
        setTodoItem(e.target.value)

    }

    const addTodo = () => {
        // setarr(() => {
        //     const cap = todoItem.toUpperCase()
        //     return [...arr, cap]
        // })
        setarr([...arr, todoItem])
        setTodoItem("")
    }


    return (
        <div>
            <label htmlFor="">todo Item</label>
            <input type="text" value={todoItem} onChange={handleUserInput} />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}