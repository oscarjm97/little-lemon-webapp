import { useNavigate } from 'react-router-dom'
import Picture from '../assets/restaurant-food.jpg';

import '../styles/Booking.css';

function Booking() {
	const navigate = useNavigate();

    const goToBookingPage = () => {
        navigate('/booking');
    };

    return (
        <div className='container'>
            <div className='left-column'>
                <div>
                    <h1 className='title'>Little Lemon</h1>
                    <h3 className='subtitle'>Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                        modern twist.
                    </p>
                </div>

                <button onClick={goToBookingPage}>Reserve a table</button>
            </div>

            <div className='right-column'>
                <img src={Picture} height={200} width={200} alt='Restaurant Food'></img>
            </div>
        </div>
    );
}

export default Booking;
