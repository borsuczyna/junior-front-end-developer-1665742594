import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Logo from './Components/Logo/Logo';
import Board from './Components/Board/Board';
import TaskPanel from './Components/Tasks/TaskPanel';
import BusinessContext from './Components/BusinessContext/BusinessContext';

import tasks from './Data/tasks';

function App() {
    // const currentContext = tasks.find((value) => value.active)?.businessContexts || [];
    const [currentTasks, setTasks] = useState(tasks);
    const [contexts, setContexts] = useState(currentTasks.find((value) => value.active)?.businessContexts, []);

    const setActiveTask = (id) => {
        if(currentTasks[id].status == 'blocked') return;

        setTasks(currentTasks.map((task, index) => {
            task.active = id == index;
            return task;
        }));

        setContexts(currentTasks.find((value) => value.active)?.businessContexts);
    }
    
    const setActiveContext = (id) => {
        setContexts(contexts.map((value, index) => {
            value.active = id == index;
            value.isNew = (id == index) ? false : value.isNew;
            return value;
        }));
    };

    return (
        <div className="App">
            <Header>
                <Logo height="1.625rem"/>
            </Header>

            <Board>
                <TaskPanel title="YOUR TASKS" tasks={currentTasks} setActiveTask={setActiveTask}/>
                <BusinessContext contexts={contexts} setActiveContext={setActiveContext}/>
            </Board>
        </div>
    );
}

export default App;