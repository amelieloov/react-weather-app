import WeatherItem from '../components/WeatherItem/WeatherItem.jsx';
import { useState, useEffect } from 'react';
import { GetCurrentWeather, GetUserPosition } from '../services/WeatherService.js';

const WeatherHeader = () => {

  const [currentWeather, setCurrentWeather] = useState({});

  // useEffect(() => {
  //   try {
  //     //const { lat, lon } = GetUserPosition();
  //     GetCurrentWeather()
  //       .then(data => {
  //         setCurrentWeather(data)
  //       });
  //   } catch (error){
  //     console.log("Couldn't get current weather", error)
  //   }

  // }, []);

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

  useEffect(() => {
    if (currentWeather) {
      console.log("Updated current weather:", currentWeather);
    }
  }, [currentWeather]);

  return (<WeatherItem item={currentWeather} />)
}

export default WeatherHeader;