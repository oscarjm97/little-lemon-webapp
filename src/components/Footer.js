import { Link } from 'react-router-dom';
import Copyright from '../assets/copyright.png';

import '../styles/Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <img src={Copyright} width={200} height={100} alt='Footer'></img>

            <div>
                <h4>Dormat Navigation</h4>
                <div className='footer-links'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/menu'>Menu</Link>
                    <Link to='/booking'>Reservations</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/login'>Login</Link>
                </div>
            </div>

            <div>
                <h4>Contact</h4>
                <span>Address</span>
                <br />
                <span>Phone number</span>
                <br />
                <Link to='mailto:myemail@gmail.com' underline='hover'>
                    myemail@gmail.com
                </Link>
            </div>

            <div>
                <h4>Social Media Links</h4>
                <div className='footer-links'>
                    <Link to='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        Instagram
                    </Link>
                    <Link to='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        Facebook
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
