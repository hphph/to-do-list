import React, { useState } from 'react';

function NewTask(props) {
    const [task, setTask] = useState('');

    const handleTaskChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        console.log('New task:', task);
        props.addTask(task, document.getElementById('checkbox-priority').checked);
        setTask('');
    };

    return (
        <form className="form-new-task">
            <div className="form-new-task-input">
                <input type='text' placeholder='add new task' value={task} onChange={handleTaskChange} />
                <input type='checkbox' id="checkbox-priority" />
                <label htmlFor="checkbox-priority">High priority</label>
            </div>
            <button onClick={handleAddTask}>ADD TASK</button>
        </form>
    );
}

export default NewTask;