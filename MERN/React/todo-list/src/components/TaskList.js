import React, { useState } from 'react';

const TaskList = () => {
    const [task, setTask] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [taskList, setTaskList] = useState([])
    const createTask = (e) => {
        e.preventDefault();
        let taskObject = {
            task: task,
            checkbox: checkbox
        };
        let updateTask = [...taskList, taskObject];
        setTaskList(updateTask);
        setTask('');
    }
    const deleteTask = (d) => {
        let copyList = taskList.filter((task, index) => index !== d)
        setTaskList(copyList);
    }
    const check = (d) => {
        let [...copyList] = taskList;
        copyList[d].checkbox=!copyList[d].checkbox;
        setTaskList(copyList);
    }

    return (
        <div className='container text-center col-6'>
            <h1>Create a Task</h1>
            <form onSubmit={createTask}>
                <div className='form-group mt-4'>
                    <input type="text" placeholder='Create Task' className='form-control' name='task' value={task} id='taskInput' onChange={(e) => setTask(e.target.value)} />
                    <input type="submit" className='btn btn-primary mb-4 mt-3' value={"Submit"} />
                </div>
            </form>
            <hr />
            <div>
                <h2>Task List</h2>
                {
                taskList.map((item, d) => {
                    return (
                        <div className='form-group mt-4'>
                            <input type="checkbox" onClick={()=>check(d)} />
                            <h4 className='ms-2' style={{display: 'inline', textDecoration: item.checkbox? 'line-through':''}} key={d}>{item.task}</h4>
                            <input type="button" className='btn btn-danger ms-3 mb-2' value="Delete" onClick={()=>deleteTask(d)} />
                        </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default TaskList;