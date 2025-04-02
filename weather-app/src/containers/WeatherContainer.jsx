
import { useContext, useEffect } from 'react';

import { GetCurrentWeather, GetForecastByLatLon, GetLatLonByCityName } from '../services/WeatherService.js';

import { WeatherContext } from '../context/WeatherContext.jsx';
import WeatherUI from '../components/WeatherUI/WeatherUI.jsx';


const WeatherContainer = () => {

    const { setWeatherList, setLocation, favorites, setShowList, setIsFavorite, setFetchError, setCurrentWeather } = useContext(WeatherContext);

    useEffect(() => {
        fetchWeather("Stockholm");
    }, [])

    const fetchWeather = async (city) => {
        try {
            const {name, lat, lon} = await GetLatLonByCityName(city);

            //Get current weather data
            const currentData = await GetCurrentWeather({lat, lon});

            //Get forecast data
            const forecastData = await GetForecastByLatLon({lat, lon});
            const forecast = [];
              
              for (let i = 0; i < 5; i++) {
                const date = forecastData.daily.time[i];
                const maxTemp = forecastData.daily.temperature_2m_max[i];
                const minTemp = forecastData.daily.temperature_2m_min[i];
                const weatherCode = forecastData.daily.weather_code[i];
                forecast[i] = {date, maxTemp, minTemp, weatherCode};
              };

            setLocation(name);
            setWeatherList(forecast);
            setCurrentWeather(currentData.current);
            setFetchError(false);

            favorites.includes(name) ? setIsFavorite(true) : setIsFavorite(false)

        } catch (error) {
            setFetchError(error.message);
            console.error("Failed to get weather data:", error);
        }
        finally{
            setShowList(false);
        }
    };

    const onBlur = () => setTimeout(() => setShowList(false), 100);

    const onFocus = () => setShowList(true);

    return (<WeatherUI handleSearch={fetchWeather} onBlur={onBlur} onFocus={onFocus} />);
}

export default WeatherContainer;