import React, { useState } from 'react';
import Button from './Button';

import "./AddButton.css"
const AddButton = () => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    return ( 
        <div className="add-task-container">
            <input onChange={handleInputChange} className="add-task-input" type="text" />
            <div className="add-task-button-container">
            <Button>Adicionar</Button>

            </div>
        </div>
     );
}
 
export default AddButton;