import './ContextDetails.css';
import { relativeDays } from './../../Utils/date-diff';

function ContextDetails({ context }) {
    if(!context) {
        return (
            <div className="context-details">
                <div className='no-context'>
                    Select context
                </div>
            </div>
        )
    }
    const date = new Date(context.created_at);
    const dateDifference = relativeDays(date.getTime());
    const localeDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).split(',')[1];

    const hours = date.getHours(), minutes = date.getMinutes();
    const hour = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return (
        <div className="context-details">
            <div>
                <h1 style={{
                    fontSize: '1.3rem'
                }}>
                    {context.title}
                </h1>

                <div style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center'
                }}>
                    <img
                        src={require(`./../../Avatars/${context.avatar}.png`)}
                        className='avatar'
                        style={{
                            width: '42px'
                        }}
                    />

                    <div style={{
                        display: 'flex',
                        gap: '1rem'
                    }}>
                        <div className='details-author'>{context.author}</div>
                        <div style={{
                            color: '#6B778C',
                            display: 'flex',
                            fontSize: '0.8rem',
                            alignItems: 'center',
                            gap: '1rem',
                        }}>
                            <div>•</div>
                            <div>{`${dateDifference}, ${localeDate}`}</div>
                            <div>•</div>
                            <div>{hour}</div>
                        </div>

                    </div>
                </div>
                <div className='context-element-details'>
                    {context.details}
                </div>
            </div>
        </div>
    );
}

export default ContextDetails;