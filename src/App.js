import './App.css';
import Header from './Components/Header/Header';
import Logo from './Components/Logo/Logo';
import Board from './Components/Tasks/Board';
import TaskPanel from './Components/Tasks/TaskPanel';

import tasks from './Data/tasks';

function App() {
    return (
        <div className="App">
            <Header>
                <Logo height="1.625rem"/>
            </Header>

            <Board>
                <TaskPanel title="YOUR TASKS" tasks={tasks}/>
            </Board>
        </div>
    );
}

export default App;