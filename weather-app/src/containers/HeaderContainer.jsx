import CurrentWeatherItem from '../components/CurrentWeatherItem/CurrentWeatherItem.jsx';
import { useState, useEffect } from 'react';
import { GetCurrentWeather, GetUserPosition } from '../services/WeatherService.js';

const HeaderContainer = () => {

  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {

    const fetchWeather = async () => {
      try {
        const { lat, lon } = await GetUserPosition();
        GetCurrentWeather({ lat, lon })
          .then(data => {
            setCurrentWeather(data)
          });
      } catch (error) {
        GetCurrentWeather({ lat: 59.334591, lon: 18.063240 })
          .then(data => {
            setCurrentWeather(data)
          });
        console.error("Failed to get user position/weather data:", error);
      }
    };

    fetchWeather();

  }, []);

  return (<CurrentWeatherItem item={currentWeather} />)
}

export default HeaderContainer;