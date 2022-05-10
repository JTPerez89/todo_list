import React, { useState } from 'react'

const Form = (props) => {
    const [inputItem, setInputItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleNewItem({todo: inputItem, completed: false});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Add to To Do:</label>
                <input type="text" onChange={(e) => setInputItem(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;