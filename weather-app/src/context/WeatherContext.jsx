import { createContext, useState } from 'react';
import GetForecastByCity from '../services/GetForecastByCity.js';
import GetForecastByLatLon from '../services/GetForecastByLatLon.js';
import GetCurrentWeather from '../services/GetCurrentWeather.js';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [currentWeather, setCurrentWeather] = useState({});
    const [weatherList, setWeatherList] = useState([]);
    const [location, setLocation] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [showList, setShowList] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    return (<WeatherContext.Provider value={{
        currentWeather,
        setCurrentWeather,
        weatherList, 
        setWeatherList,
        location, 
        fetchError, 
        favorites, 
        isFavorite, 
        showList,
    }}>
        {children}
    </WeatherContext.Provider>)
}
