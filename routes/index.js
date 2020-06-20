var express = require("express");
var router = express.Router();
const getGeocode = require("../ultils/getGeocode");
const getForecast = require("../ultils/getForecast");

/* GET home page. */
/*localhost:3000/?city=somthing%20you%20type*/

router.get("/", async function (req, res, next) {
    try {
        const { city } = req.query; //Get the city value
        if (!city) {
            return res.render("index", { title: "(Not) Awesome Weather App" });
        }
        //Get coordinates of city
        const location = await getGeocode(city);
        //Get the forecast
        const forecast = await getForecast(location.geometry.coordinates);
        console.log(forecast.current.weather);
        return res.render("index", {
            title: "(Not) Awesome Weather App",
            forecast: forecast.current,
            city: city,
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
