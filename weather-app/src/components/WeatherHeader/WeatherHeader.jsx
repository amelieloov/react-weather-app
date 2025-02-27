import WeatherItem from '../WeatherItem/WeatherItem.jsx';
import {useContext, useEffect} from 'react';
import { WeatherContext } from '../../context/WeatherContext.jsx';

const WeatherHeader = () => {

    const {currentWeather, fetchCurrentWeather} = useContext(WeatherContext);

    useEffect(() => {
        fetchCurrentWeather();
    }, []);

    return (<WeatherItem item={currentWeather}/>)
}

export default WeatherHeader;