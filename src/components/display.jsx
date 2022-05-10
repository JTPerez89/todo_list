import React from 'react'

const Display = (props) => {
    const handleUpdate = (i) => { 
        const itemsCopy = [...props.items]
        itemsCopy[i].completed = !itemsCopy[i].completed
        props.setItems(itemsCopy)
    }

    const deleteTask = (delIdx) => {
        const filteredItems = props.items.filter((item, i) => {
            return i !== delIdx;
        })
        props.setItems(filteredItems);
    }

    return (
        <div>
            {props.items.map((items, i)=>{
                return(
                    <div key={i}>
                        <p style={{textDecoration: items.completed? 'line-through': 'none'}}>{items.todo}</p>
                        <input type="checkbox" onClick={()=>handleUpdate(i)}/>
                        <button onClick={()=>deleteTask(i)}>Delete</button>
                        </div>
                )
            })}
        </div>
    )
}

export default Display;