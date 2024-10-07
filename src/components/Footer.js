import '../styles/Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <img src='' alt='Footer'></img>

            <div>
                <h4>Dormat Navigation</h4>
                <div className='footer-links'>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/menu'>Menu</a>
                    <a href='/reservations'>Reservations</a>
                    <a href='/order'>Order Online</a>
                    <a href='/login'>Login</a>
                </div>
            </div>

            <div>
                <h4>Contact</h4>
                <span>Address</span>
                <br />
                <span>Phone number</span>
                <br />
                <span>myemail@gmail.com</span>
            </div>

            <div>
                <h4>Social Media Links</h4>
                <div className='footer-links'>
                    <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                        Instagram
                    </a>
                    <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                        Facebook
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
