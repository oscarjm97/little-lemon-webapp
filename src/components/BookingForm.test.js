import { initializeAvailableTimes, updateAvailableTimes } from './BookingForm';

describe('initializeAvailableTimes', () => {
    it('should return a non-empty array of available booking times', () => {
        // Call the function
        const result = initializeAvailableTimes();

        // Check if the result is a non-empty array
        expect(result).toBeInstanceOf(Array);
        expect(result).not.toHaveLength(0);
    });
});

describe('updateAvailableTimes function', () => {
    it('should return a non-empty array of available booking times for the selected date', () => {
        const initState = ['18:00h', '19:00h', '20:00h', '21:00h', '22:00h'];

        // Call the function
        const result = updateAvailableTimes(initState, { selectedDate: new Date() });

        // Check if the result is a non-empty array
        expect(result).toBeInstanceOf(Array);
        expect(result).not.toHaveLength(0);
    });
});
