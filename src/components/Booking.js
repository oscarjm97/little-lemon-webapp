import { useNavigate } from 'react-router-dom';
import Picture from '../assets/restaurant-food.jpg';

import '../styles/Booking.css';

function Booking() {
    const navigate = useNavigate();

    const goToBookingPage = () => {
        navigate('/booking');
    };

    return (
        <section className='home-booking'>
            <div className='left-column'>
                <div>
                    <h1 className='title'>Little Lemon</h1>
                    <h3 className='subtitle'>Chicago</h3>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
                        modern twist.
                    </p>
                </div>

                <button aria-label='On Click' onClick={goToBookingPage}>
                    Reserve a table
                </button>
            </div>

            <div className='right-column'>
                <img src={Picture} height={200} width={200} alt='Restaurant Food'></img>
            </div>
        </section>
    );
}

export default Booking;
