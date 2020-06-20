const axios = require("axios");

const getForecast = async ([lon, lat]) => {
    try {
        const token = process.env.OPEN_WEATHER_KEY;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${token}&exclude={daily,minutely}&units=metric`;
        const res = await axios.get(url);
        console.log(res.data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

module.exports = getForecast;
