import { BookingForm } from '../components/BookingForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

function BookingPage() {
    return (
        <>
            <Header />
            <main>
                <BookingForm />
            </main>
            <Footer />
        </>
    );
}

export default BookingPage;
