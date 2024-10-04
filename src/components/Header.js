import Nav from './Nav';
import Logo from '../assets/Logo.svg';

function Header() {
    return (
        <header>
            <img src={Logo} alt='Little Lemon Logo'></img>
            <Nav />
        </header>
    );
}

export default Header;
