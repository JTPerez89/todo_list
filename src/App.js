import './App.css';
import Form from "./components/form"
import Display from "./components/display"
import React, { useState } from 'react'

function App() {
    const [items, setItems] = useState([]);


    const handleNewItem = (newItem) => {
        setItems([...items, newItem]);
    }


    return (
        <div>
            <Form handleNewItem={handleNewItem} />
            <Display items={items} setItems={setItems}/>
        </div>
    );
}

export default App;
