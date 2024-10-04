function Footer() {
    return (
        <footer>
            <img src='' alt='Footer'></img>

            <div>
                <h4>Dormat Navigation</h4>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/menu'>Menu</a>
                    </li>
                    <li>
                        <a href='/reservations'>Reservations</a>
                    </li>
                    <li>
                        <a href='/order'>Order Online</a>
                    </li>
                    <li>
                        <a href='/login'>Login</a>
                    </li>
                </ul>
            </div>

			<div>
                <h4>Contact</h4>
                <span>Address</span><br />
				<span>Phone number</span><br />
				<span>myemail@gmail.com</span>
            </div>

			<div>
                <h4>Social Media Links</h4>
                <span>Instagram</span><br />
				<span>Facebook</span>
            </div>
        </footer>
    );
}

export default Footer;
