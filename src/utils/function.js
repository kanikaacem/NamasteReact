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


export const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    const apiUrl = `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_YOUR_GOOGLE_MAPS_API_KEY}`;

                    fetch(apiUrl, {
                        method: 'POST',
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            const { location } = data;
                            const { lat, lng } = location;
                            console.log(location);
                            resolve({ latitude: lat, longitude: lng });
                        })
                        .catch((error) => {
                            reject(error);
                        });

                    // console.error('Error getting location:', error);
                    // reject(error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            reject(new Error('Geolocation is not supported.'));
        }
    });
};

export const goBack = () => window.history.back();
