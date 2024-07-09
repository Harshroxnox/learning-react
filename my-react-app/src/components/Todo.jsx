import {useState} from 'react'

function Todo(){

    const [tasks, setTasks] = useState(["Brush your teeth", "Eat Breakfast"]);

    const addTask = () => {
        const newTask = document.getElementById('newTask').value;
        if(newTask !== ""){
            setTasks([...tasks, newTask]);
        }
        document.getElementById('newTask').value = "";
    }

    const deleteTask = (delIndex) => {
        setTasks(tasks.filter((task,index)=>index !== delIndex));
    }

    const moveTaskUp = (taskIndex) => {
        if(taskIndex > 0){
            let newTasks = tasks;
            const temp = newTasks[taskIndex];
            newTasks[taskIndex] = newTasks[taskIndex-1];
            newTasks[taskIndex-1] = temp;
            setTasks([...newTasks]);
        }
    }

    const moveTaskDown = (taskIndex) => {
        if(taskIndex < tasks.length - 1){
            let newTasks = tasks;
            const temp = newTasks[taskIndex];
            newTasks[taskIndex] = newTasks[taskIndex+1];
            newTasks[taskIndex+1] = temp;
            setTasks([...newTasks]);
        }
    }

    return(<div>
        <h2>To-Do-List</h2>
        <input type='text' id='newTask' placeholder='Enter a task...'/>
        <button onClick={addTask}>Add</button>
        <ul>
            {tasks.map((task,index)=>(
                <li key={index}>
                    <span>{task}</span>
                    <button onClick={()=>deleteTask(index)}>Delete</button>
                    <button onClick={()=>moveTaskUp(index)}>👆️</button>
                    <button onClick={()=>moveTaskDown(index)}>👇️</button>
                </li>
            ))}
        </ul>
    </div>)
}

export default Todo;