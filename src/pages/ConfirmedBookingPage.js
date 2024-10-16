import Footer from '../components/Footer';
import Header from '../components/Header';

function ConfirmedBookingPage() {
    return (
        <>
            <Header />
            <main>
                <h2 style={{ color: '#495e57', display: 'flex', justifyContent: 'center' }}>
                    Your booking is successfully confirm.
                    <br /> See you soon!
                </h2>
            </main>
            <Footer />
        </>
    );
}

export default ConfirmedBookingPage;
