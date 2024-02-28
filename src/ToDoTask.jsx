function ToDoTask({index, name, priority, isDone, handleDone, handleDelete})
{
    function taskDone()
    {
        handleDone(index);
    }

    function taskDelete()
    {
        handleDelete(index);
    }

    return (
        <li>
            <b style={{color: priority ? 'red' : 'white'}}> {name} </b>
            {!isDone ? <button onClick={taskDone}>DONE</button> : null}
            <button onClick={taskDelete}>❌</button>
        </li>
    );
}

export default ToDoTask;