import WeatherItem from '../components/WeatherItem/WeatherItem.jsx';
import {useState, useEffect} from 'react';
import GetCurrentWeather from '../services/GetCurrentWeather.js';

const WeatherHeader = () => {

    const [currentWeather, setCurrentWeather] = useState({});

    useEffect(() => {
        fetchCurrentWeather();
    }, []);

    const fetchCurrentWeather = async () => {
        GetCurrentWeather()
        .then(data => {
            setCurrentWeather(data)
        });

    }

    return (<WeatherItem item={currentWeather}/>)
}

export default WeatherHeader;