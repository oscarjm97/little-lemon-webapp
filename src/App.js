import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/booking' element={<BookingPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
