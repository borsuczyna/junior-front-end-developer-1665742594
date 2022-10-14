import './TaskPanel.css';
import './../Scrollbar.css';
import Task from './Task';

function TaskPanel({ title, tasks }) {
    return (
        <div className="taskPanel">
            <div className='taskTitle'>
                {title}
            </div>

            <div className='taskList'>
                {tasks.map(task => 
                    <Task task={task}/>
                )}
            </div>
        </div>
    );
}

export default TaskPanel;