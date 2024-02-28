import ToDoTask from "./ToDoTask";

function ToDoList({tasks, setTaskDone, deleteTask})
{
    const tasksDone = () => {
        let count = 0;
        tasks.forEach(task => {
            if (task.isDone) count++;
        });
        return count;
    }

    const tasksNotDone = () => tasks.length - tasksDone();

    return (
        <div className="todo-lists">
            <ul>
                <header>To Do ({tasksNotDone()})</header>
                {tasks.map((task, index) => !task.isDone ? <ToDoTask key={index} index={index} name={task.name} priority={task.priority} isDone={task.isDone} handleDone={setTaskDone} handleDelete={deleteTask}/> : null)}
            </ul>

            <ul>
                <header>Done ({tasksDone()})</header>
                {tasks.map((task, index) => task.isDone ? <ToDoTask key={index} index={index} name={task.name} priority={task.priority} isDone={task.isDone} handleDone={setTaskDone} handleDelete={deleteTask}/> : null)}
            </ul>
        </div>
    );
}

export default ToDoList;