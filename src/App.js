import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Logo from './Components/Logo/Logo';
import Board from './Components/Board/Board';
import TaskPanel from './Components/Tasks/TaskPanel';
import BusinessContext from './Components/BusinessContext/BusinessContext';
import Footer from './Components/Footer/Footer';

import tasks from './Data/tasks';

function App() {
    // const currentContext = tasks.find((value) => value.active)?.businessContexts || [];
    const [currentTasks, setTasks] = useState(tasks);
    const [contexts, setContexts] = useState(currentTasks.find((value) => value.active)?.businessContexts, []);
    const [currentContext, setCurrentContext] = useState(contexts.find(value => value.active), false);

    const setActiveTask = (id) => {
        if(currentTasks[id].status === 'blocked') return;

        setTasks(currentTasks.map((task, index) => {
            task.active = id === index;
            return task;
        }));

        let contexts = currentTasks.find((value) => value.active)?.businessContexts;
        setContexts(contexts);
        setCurrentContext(contexts.find(value => value.active));
    }
    
    const setActiveContext = (id) => {
        setContexts(contexts.map((value, index) => {
            value.active = id === index;
            value.isNew = (id === index) ? false : value.isNew;
            return value;
        }));

        setCurrentContext(contexts.find(value => value.active));
    };

    return (
        <div className="App">
            <Header>
                <Logo height="1.625rem"/>
            </Header>

            <Board>
                <TaskPanel title="YOUR TASKS" tasks={currentTasks} setActiveTask={setActiveTask}/>
                <BusinessContext
                    contexts={contexts}
                    setActiveContext={setActiveContext}
                    currentContext={currentContext}
                />
            </Board>
            
            <Footer
                left={['Terms of service', 'Privacy policy', 'Copyright']}
                right={['nerds.family Version 1.2', 'Last update 15/10/2022']}
            />
        </div>
    );
}

export default App;