import Tabs from './Tabs';
import { useState } from 'react';

import './BusinessContext.css';
import ContextList from './ContextList';

const tabs = [
    {
        title: 'BUSINESS CONTEXT',
        active: true
    },
    // {
    //     title: 'JUST A DEBUG',
    //     active: false
    // },
]

function BusinessContext({ contexts, setActiveContext }) {
    return (
        <div className="context">
            <Tabs tabs={tabs}/>

            <div className="context-board">
                <ContextList contexts={contexts} setActiveContext={setActiveContext}/>
            </div>
        </div>
    );
}

export default BusinessContext;