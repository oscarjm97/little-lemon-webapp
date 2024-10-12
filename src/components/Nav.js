import { Link } from 'react-router-dom';

import '../styles/Nav.css';

function Nav() {
    return (
        <nav>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/menu'>
                        Menu
                    </Link>
                </li>
                <li>
                    <Link to='/booking'>
                        Reservations
                    </Link>
                </li>
                <li>
                    <Link to='/order'>
                        Order
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
