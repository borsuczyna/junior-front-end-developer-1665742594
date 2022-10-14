import './TaskPanel.css';
import Task from './Task';

import tasks from './../../Data/tasks';

function TaskPanel({ title }) {
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