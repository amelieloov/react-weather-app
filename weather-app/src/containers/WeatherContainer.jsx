
import {useContext, useEffect} from 'react';

import { GetCurrentWeather, GetForecastByLatLon } from '../services/WeatherService.js';

import { WeatherContext } from '../context/WeatherContext.jsx';
import WeatherUI from '../components/WeatherUI/WeatherUI.jsx';


const WeatherContainer = () => {

    const {weatherList, setWeatherList, setLocation, favorites, setShowList, setIsFavorite, setFetchError, setCurrentWeather} = useContext(WeatherContext);

    useEffect(() => {
        fetchWeather("London");
    }, [])

    // useEffect(() => {
    //     fetchForecast(location);
    // }, [location]);

    const fetchWeather = async (city) => {
        try {
            const forecastData = await GetForecastByLatLon(city);
            console.log(forecastData);
            const currentData = await GetCurrentWeather(city);

            setLocation(forecastData.city.name);
            setWeatherList(forecastData.list.filter(item => item.dt_txt.includes("12:00:00")));
            console.log(weatherList);
            setCurrentWeather(currentData);
            //setWeatherList(data);
            setFetchError(false);
        } catch (error) {
            setFetchError(error.message);
            console.error("Failed to get user position/weather data:", error);
        }
    };

    const handleSearch = async (city) => {

        try{
            fetchWeather(city);
            setFetchError(false);
        } catch{
            setFetchError(true);
        }

        setShowList(false);

        favorites.includes(location) ? setIsFavorite(true) : setIsFavorite(false)
    }

    const onBlur = () => setTimeout(() => setShowList(false), 100);

    const onFocus = () => setShowList(true);

    return (<WeatherUI handleSearch={handleSearch} onBlur={onBlur} onFocus={onFocus}/>);
}

export default WeatherContainer;