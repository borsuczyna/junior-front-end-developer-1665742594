import Context from './Context';
import './ContextList.css';

function ContextList({ contexts, setActiveContext }) {
    return (
        <div className="context-list">
            {contexts.map((context, index) => 
                <Context 
                    key={index}
                    index={index}
                    context={context}
                    setActiveContext={setActiveContext}
                />
            )}
        </div>
    );
}

export default ContextList;