import {useState} from 'react';
import GetForecastByCity from '../services/GetForecastByCity.js';
import GetForecastByLatLon from '../services/GetForecastByLatLon.js';

const useWeather = () => {

    const [weatherList, setWeatherList] = useState([]);
    const [location, setLocation] = useState("");
    const [error, setError] = useState(null);

    const fetchForecast = async (city, days) => {
        try {
            const data = await GetForecastByCity(city, days);;
            setWeatherList(data.forecast.forecastday);
            setLocation(data.location.name);
            setError(null);
        }
        catch (err) {
            setError(err.message);
        }
    }

    const fetchForecastByLatLon = async () => {
        GetForecastByLatLon(5).then(data => {
            setWeatherList(data.forecast.forecastday),
                setLocation(data.location.name);
        })}

    return {weatherList, location, error, fetchForecast, fetchForecastByLatLon};
}

export default useWeather;