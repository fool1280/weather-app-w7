function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            console.log(coords.longitude, coords.latitude);
            fetchWeather(coords.longitude, coords.latitude);
        });
    }
}

async function fetchWeather(lon, lat) {
    const res = await fetch(`/weather-by-coords?lon=${lon}&lat=${lat}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    console.log(data);
}

getLocation();
