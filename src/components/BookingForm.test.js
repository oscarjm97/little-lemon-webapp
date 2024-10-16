import { render, screen } from '@testing-library/react';
import { BookingForm, updateAvailableTimes } from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Book a Table Now');
    expect(headingElement).toBeInTheDocument();
});

describe('updateAvailableTimes function', () => {
    it('should return the right available times for today', () => {
		const initState = [
            { key: '18', value: '18:00h' },
            { key: '19', value: '19:00h' },
            { key: '20', value: '20:00h' },
            { key: '21', value: '21:00h' },
            { key: '22', value: '22:00h' },
        ];
        const expectedAvailableTimes = [
            { key: '21', value: '21:00h' },
            { key: '22', value: '22:00h' },
        ];

        // Call the function
        const result = updateAvailableTimes(initState, { selectedDate: new Date() });

        // Check if the result matches the expected output
        expect(result).toEqual(expectedAvailableTimes);
    });

	it('should return the right available times for tomorrow', () => {
		const initState = [
            { key: '18', value: '18:00h' },
            { key: '19', value: '19:00h' },
            { key: '20', value: '20:00h' },
            { key: '21', value: '21:00h' },
            { key: '22', value: '22:00h' },
        ];
        const expectedAvailableTimes = [
            { key: '18', value: '18:00h' },
            { key: '19', value: '19:00h' },
            { key: '20', value: '20:00h' },
            { key: '21', value: '21:00h' },
            { key: '22', value: '22:00h' },
        ];

        // Call the function
        const result = updateAvailableTimes(initState, { selectedDate: '' });

        // Check if the result matches the expected output
        expect(result).toEqual(expectedAvailableTimes);
    });
});
