import CurrentWeatherItem from '../components/CurrentWeatherItem/CurrentWeatherItem.jsx';
import { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext.jsx';
import { GetCurrentWeather } from '../services/WeatherService.js';

const HeaderContainer = () => {

  const {location} = useContext(WeatherContext);
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    fetchWeather("Stockholm");
  }, []);

  // useEffect(() => {
  //   fetchWeather(location);
  // }, [location]);

  const fetchWeather = async (city) => {
    try {
      GetCurrentWeather(city)
        .then(data => {
          setCurrentWeather(data)
        });
    } catch (error){
      console.error("Failed to get user position/weather data:", error);
    }
  };

  return (<CurrentWeatherItem item={currentWeather} />)
}

export default HeaderContainer;