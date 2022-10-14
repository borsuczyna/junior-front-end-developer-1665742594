import logo from './../../Icons/logo.svg';

function Logo({height}) {
    return (
        <img src={logo} style={
            height = {height}
        } className="header-logo" alt="logo" />
    );
}

export default Logo;