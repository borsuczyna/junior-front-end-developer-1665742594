import './Context.css';

function Context({ context, setActiveContext, index }) {
    var className = 'context-element';
    var date = new Date(context.created_at).toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).split(',')[1];

    if(context.active) {
        className += ' context-element-active';
    } if(context.isNew) {
        className += ' context-element-new';
    }

    return (
        <div className={className} onClick={() => {
            setActiveContext(index);
        }}>
            <div className='context-top'>
                {context.isNew ? <div className='context-new'>NEW</div> : <></>}
                <div>{context.author}</div>
                <div>•</div>
                <div>{date}</div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
            }}>
                <div className='context-title' style={{
                color: context.isNew ? '#0165FF' : 'black',
                fontWeight: context.isNew ? 700 : 600
            }}>
                    {context.title}
                </div>
                <div className='context-content'>
                    {context.content}
                </div>
            </div>
        </div>
    );
}

export default Context;