import { useEffect, useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from '../utils/api';
import { isPastDate } from '../utils/dates';

import '../styles/BookingForm.css';
import { useNavigate } from 'react-router-dom'

export function initializeAvailableTimes() {
    const today = new Date();

    return fetchAPI(today);
}

export function updateAvailableTimes(state, action) {
    if (action.selectedDate) {
        return fetchAPI(new Date(action.selectedDate));
    }

    return initializeAvailableTimes();
}

const ResDateErrorMessage = () => {
    return <p className='field-error'>Please, provide a valid date</p>;
};

const GuestsErrorMessage = () => {
    return <p className='field-error'>Please, provide a number of guest between 1 and 10</p>;
};

export function BookingForm() {
    const [availableTimes, dispatch] = useReducer(updateAvailableTimes, initializeAvailableTimes());
    const [resDate, setResDate] = useState({ value: '', isTouched: false });
    const [resTime, setResTime] = useState('');
    const [guests, setGuests] = useState({ value: '', isTouched: false });
    const [occasion, setOccasion] = useState('birthday');
    const navigate = useNavigate();

    const goToConfirmedBookingPage = () => {
        navigate('/confirmed-booking');
    };

    useEffect(() => {
        setResTime(availableTimes[0]);
    }, [availableTimes]);

    const isValidResDate = () => {
        return resDate.value && !isPastDate(resDate.value);
    };

    const isValidGuestsNumber = () => {
        return Number(guests.value) > 0 && Number(guests.value) <= 10;
    };

    const isFormValid = () => {
        return isValidResDate() && isValidGuestsNumber();
    };

    const clearForm = () => {
        dispatch({ selectedDate: '' });
        setResDate({ value: '', isTouched: false });
        setGuests({ value: '', isTouched: false });
        setOccasion('birthday');
    };

    const handleChangeResDate = (e) => {
        setResDate({ ...resDate, value: e.target.value });
        dispatch({ selectedDate: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (submitAPI(e.target)) {
            goToConfirmedBookingPage();
        } else {
            alert('There was an error with your booking. Please, try it again.');
        }

        clearForm();
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Book a Table Now</h2>
                    <div className='field'>
                        <label htmlFor='res-date'>
                            Choose date <sup>*</sup>
                        </label>
                        <input
                            id='res-date'
                            type='date'
                            value={resDate.value}
                            onChange={handleChangeResDate}
                            onBlur={() => setResDate({ ...resDate, isTouched: true })}
                        />
                        {resDate.isTouched && !isValidResDate() ? <ResDateErrorMessage /> : null}
                    </div>

                    <div className='field'>
                        <label htmlFor='res-time'>
                            Choose time <sup>*</sup>
                        </label>
                        <select
                            id='res-time'
                            value={resTime}
                            onChange={(e) => setResTime(e.target.value)}
                            disabled={!isValidResDate()}
                        >
                            {availableTimes.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='field'>
                        <label htmlFor='guests'>Number of guests</label>
                        <input
                            id='guests'
                            type='number'
                            placeholder='Select a number of guests between 1 and 10'
                            min='1'
                            max='10'
                            value={guests.value}
                            onChange={(e) => setGuests({ ...guests, value: e.target.value })}
                            onBlur={() => setGuests({ ...guests, isTouched: true })}
                        />
                        {guests.isTouched && !isValidGuestsNumber() ? <GuestsErrorMessage /> : null}
                    </div>

                    <div className='field'>
                        <label htmlFor='occasion'>
                            Occasion <sup>*</sup>
                        </label>
                        <select id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option value='birthday'>Birthday</option>
                            <option value='anniversary'>Anniversary</option>
                            <option value='social'>Social</option>
                        </select>
                    </div>

                    <button type='submit' disabled={!isFormValid()}>
                        Book Table
                    </button>
                </fieldset>
            </form>
        </div>
    );
}
