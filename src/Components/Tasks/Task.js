import './Task.css';

import arrow from './../../Icons/arrow.svg';
import arrowRight from './../../Icons/arrow-right.svg';
import lock from './../../Icons/lock.svg';

const taskData = {
    'completed': {
        icon: arrow,
    },
    'active': {
        icon: arrowRight,
    },
    'blocked': {
        icon: lock,
        color: '#AEB5C1'
    },
}

function Task({ task, index, setTask }) {
    return (
        <div key={task.title} className={"task " + (task.status !== 'blocked' ? 'task-accessible' : '')} onClick={() => {
            setTask(index)
        }}>
            <img src={taskData[task.status].icon} alt="status"/>
            
            <div style={{
                fontWeight: task.active ? 600 : 500,
                color: taskData[task.status].color || 'black'
            }}>
                {task.title}
            </div>
        </div>
    );
}

export default Task;