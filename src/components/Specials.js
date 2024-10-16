import { useNavigate } from 'react-router-dom';
import GreekSalad from '../assets/greek_salad.jpg';
import Bruschetta from '../assets/bruschetta.jpg';
import LemonDessert from '../assets/lemon_dessert.jpg';
import DeliveryIcon from '../assets/delivery_icon.png';

import '../styles/Specials.css';

function Specials() {
    const navigate = useNavigate();

    const goToMenuPage = () => {
        navigate('/menu');
    };

    const goToOrderPage = () => {
        navigate('/order');
    };

    return (
        <section className='specials'>
            <div className='title-section'>
                <h2>Specials</h2>
                <button aria-label='On Click' onClick={goToMenuPage}>
                    Online Menu
                </button>
            </div>
            <div className='cards'>
                <article className='card-item'>
                    <img src={GreekSalad} width={220} height={150} alt='Greek Salad'></img>
                    <div className='card-item-text'>
                        <div className='card-item-title'>
                            <h4>Greek salad</h4>
                            <span>$12.99</span>
                        </div>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese,
                            garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <button aria-label='On Click' onClick={goToOrderPage}>
                            Order a delivery
                            <img src={DeliveryIcon} alt='Delivery Logo'></img>
                        </button>
                    </div>
                </article>
                <article className='card-item'>
                    <img src={Bruschetta} width={220} height={150} alt='Bruschetta'></img>
                    <div className='card-item-text'>
                        <div className='card-item-title'>
                            <h4>Bruschetta</h4>
                            <span>$5.99</span>
                        </div>
                        <p>
                            Our Bruschetta is made from grilled bread that has been smeared with our special Sicilian
                            tomatoes, garlic and seasoned with salt and olive oil.
                        </p>
                        <button aria-label='On Click' onClick={goToOrderPage}>
                            Order a delivery
                            <img src={DeliveryIcon} alt='Delivery Logo'></img>
                        </button>
                    </div>
                </article>
                <article className='card-item'>
                    <img src={LemonDessert} width={220} height={150} alt='Lemon Dessert'></img>
                    <div className='card-item-text'>
                        <div className='card-item-title'>
                            <h4>Lemon Dessert</h4>
                            <span>$5.00</span>
                        </div>
                        <p>
                            This comes straight from grandma’s recipe book, every last ingredient has been sourced and
                            is as authentic as can be imagined with its four layers of lemon.
                        </p>
                        <button aria-label='On Click' onClick={goToOrderPage}>
                            Order a delivery
                            <img src={DeliveryIcon} alt='Delivery Logo'></img>
                        </button>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Specials;
