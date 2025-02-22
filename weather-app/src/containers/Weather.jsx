import WeatherItem from "../components/WeatherItem/WeatherItem";
import {useState, useEffect} from 'react';
import GetWeather from "../services/GetWeather";

const Weather = () => {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        GetWeather()
        .then(data => {
            setWeather(data)
        });
    }, []);
    console.log("State:", weather);

    return (<WeatherItem item={weather}/>)
}

export default Weather;