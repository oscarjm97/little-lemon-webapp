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
