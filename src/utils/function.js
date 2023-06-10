export const getJobPostedTime = (postedDate) => {
    const dateString = postedDate;

    // Create a new Date object from the date string
    const date = new Date(dateString);

    // Get the day, month, and year values
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();

    return `${day}, ${month} ${year}`
}
export const replaceUnderscore = (string) => {
    if (string !== undefined && string.includes('_')) {
        return string.replaceAll("_", ' ');
    }
    return string;
};