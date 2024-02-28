import { useState } from 'react'
import './App.css'
import NewTask from './NewTask'
import ToDoList from './ToDoList'

function App() {
    const [tasks, setTasks] = useState([]);

    function addTask(name, priority)
    {
        setTasks([...tasks, {name, priority, isDone: false}]);
    }

    function setTaskDone(index)
    {
        const newTasks = [...tasks];
        newTasks[index].isDone = true;
        setTasks(newTasks);
    }

    function deleteTask(index)
    {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return (
        <>
        <NewTask addTask={addTask}/>
        <ToDoList tasks={tasks} setTaskDone={setTaskDone} deleteTask={deleteTask}/>
        </>
    );
}

export default App
