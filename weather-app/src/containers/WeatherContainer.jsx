import {useState, useEffect} from 'react';
import GetWeather from '../services/GetWeather.js';
import WeatherList from '../components/WeatherList/WeatherList.jsx';

const WeatherContainer = () => {
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        GetWeather()
        .then(data => {
            setWeatherList(data)
        });
    }, []);
    console.log("State:", weatherList);

    return(<WeatherList list={weatherList}/>)
}

export default WeatherContainer;