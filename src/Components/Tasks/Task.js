import './Task.css';

import arrow from './../../Data/arrow.svg';
import arrowRight from './../../Data/arrow-right.svg';
import lock from './../../Data/lock.svg';

const taskData = {
    'completed': {
        icon: arrow,
    },
    'active': {
        icon: arrowRight,
        weight: 600
    },
    'blocked': {
        icon: lock,
        color: '#AEB5C1'
    },
}

function Task({ task }) {
    return (
        <div key={task.title} className="task">
            <img src={taskData[task.status].icon} alt="status"/>
            
            <div style={{
                fontWeight: taskData[task.status].weight || 500,
                color: taskData[task.status].color || 'black'
            }}>
                {task.title}
            </div>
        </div>
    );
}

export default Task;