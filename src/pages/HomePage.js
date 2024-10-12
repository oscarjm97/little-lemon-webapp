import About from '../components/About';
import Booking from '../components/Booking';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';

function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Booking />
                <Specials />
                <Testimonials />
                <About />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
