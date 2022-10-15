import Tabs from './Tabs';
import { useState } from 'react';

import './BusinessContext.css';
import ContextList from './ContextList';
import ContextDetails from './ContextDetails';

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

function BusinessContext({ contexts, setActiveContext, currentContext }) {
    return (
        <div className="context">
            <Tabs tabs={tabs}/>

            <div className="context-board">
                <ContextList contexts={contexts} setActiveContext={setActiveContext}/>
                <ContextDetails context={currentContext}/>
            </div>
        </div>
    );
}

export default BusinessContext;