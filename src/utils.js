export function initializeTimes() {
    return [
        {
            key: '18',
            value: '18:00h',
        },
        {
            key: '19',
            value: '19:00h',
        },
        {
            key: '20',
            value: '20:00h',
        },
        {
            key: '21',
            value: '21:00h',
        },
        {
            key: '22',
            value: '22:00h',
        },
    ];
}

export function isPastDate(date) {
    const today = new Date();
	today.setHours(0, 0, 0, 0)
    const selectedDate = new Date(date);

    return selectedDate < today;
}

export function isToday(date) {
    const today = new Date();
	today.setHours(0, 0, 0, 0)
    const selectedDate = new Date(date);
	selectedDate.setHours(0, 0, 0, 0)

    return selectedDate.getTime() === today.getTime();
}
