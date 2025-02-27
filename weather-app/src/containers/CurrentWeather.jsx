import WeatherItem from "../components/WeatherItem/WeatherItem";
import {useState, useEffect} from 'react';
import GetForecastByLatLon from "../services/GetForecastByLatLon";
import GetCurrentWeather from "../services/GetCurrentWeather";

const Weather = () => {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        GetCurrentWeather()
        .then(data => {
            setWeather(data)
        });
    }, []);

    return (<WeatherItem item={weather}/>)
}

export default Weather;