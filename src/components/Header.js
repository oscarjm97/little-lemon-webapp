import Nav from './Nav';
import Logo from '../assets/Logo.svg';

import '../styles/Header.css';

function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt='Little Lemon Logo'></img>
            <Nav />
        </header>
    );
}

export default Header;
