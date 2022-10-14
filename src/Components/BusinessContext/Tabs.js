import './Tabs.css';

import tabIcon from './../../Icons/tab.svg';

function Tab({ tab, index }) {
    var styles = 'context-tab ';

    if(tab.active) styles += 'context-active';

    return (
        <div className={styles}>
            <img src={tabIcon} alt=''/>
            {tab.title}
        </div>
    );
}

function Tabs({ tabs }) {
    return (
        <div className="tabs">
            {tabs.map((tab, index) => {
                return <Tab tab={tab} key={index}/>
            })}
        </div>
    );
}

export default Tabs;