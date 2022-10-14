import './TaskPanel.css';
import './../Scrollbar.css';
import Task from './Task';

function TaskPanel({ title, tasks, setActiveTask }) {
    return (
        <div className="taskPanel">
            <div className='taskTitle'>
                {title}
            </div>

            <div className='taskList'>
                {tasks.map((task, index) => 
                    <Task task={task} key={index} setTask={setActiveTask} index={index}/>
                )}
            </div>
        </div>
    );
}

export default TaskPanel;