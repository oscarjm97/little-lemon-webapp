import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/booking' element={<BookingPage />}></Route>
                <Route path='/confirmed-booking' element={<ConfirmedBookingPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
