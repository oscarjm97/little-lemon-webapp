import Profile1 from '../assets/profile1.jpg';
import Profile2 from '../assets/profile2.jpg';
import Profile3 from '../assets/profile3.jpg';
import Profile4 from '../assets/profile4.jpg';

import '../styles/Testimonials.css';

function Testimonials() {
    return (
        <section className='testimonials'>
            <h4>Testimonials</h4>

            <div className='review-items-container'>
                <article className='review-item'>
                    <h5>Rating</h5>
                    <div className='profile'>
                        <img src={Profile1} width={36} height={36} alt='Profile'></img>
                        <h6>John Smith</h6>
                    </div>
                    <span>
                        Pariatur ad pariatur cillum laboris cupidatat Lorem sint ad elit aliqua veniam ullamco amet.
                    </span>
                </article>

                <article className='review-item'>
                    <h5>Rating</h5>
                    <div className='profile'>
                        <img src={Profile2} width={36} height={36} alt='Profile'></img>
                        <h6>Ariana Williams</h6>
                    </div>
                    <span>
                        Pariatur ad pariatur cillum laboris cupidatat Lorem sint ad elit aliqua veniam ullamco amet.
                    </span>
                </article>

                <article className='review-item'>
                    <h5>Rating</h5>
                    <div className='profile'>
                        <img src={Profile3} width={36} height={36} alt='Profile'></img>
                        <h6>Will Adams</h6>
                    </div>
                    <span>
                        Pariatur ad pariatur cillum laboris cupidatat Lorem sint ad elit aliqua veniam ullamco amet.
                    </span>
                </article>

                <article className='review-item'>
                    <h5>Rating</h5>
                    <div className='profile'>
                        <img src={Profile4} width={36} height={36} alt='Profile'></img>
                        <h6>Maria Stone</h6>
                    </div>
                    <span>
                        Pariatur ad pariatur cillum laboris cupidatat Lorem sint ad elit aliqua veniam ullamco amet.
                    </span>
                </article>
            </div>
        </section>
    );
}

export default Testimonials;
