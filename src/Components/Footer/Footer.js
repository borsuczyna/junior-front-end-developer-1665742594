import './Footer.css';

function Footer({ left, right }) {
    left = left.join('|•|').split('|');
    right = right.join('|•|').split('|');

    return (
        <div className='Footer'>
            <div className='Footer-element'>
                {left.map((value) => 
                    <div>{value}</div>
                )}
            </div>
            <div className='Footer-element'>
                {right.map((value) => 
                    <div>{value}</div>
                )}
            </div>
        </div>
    );
}

export default Footer;