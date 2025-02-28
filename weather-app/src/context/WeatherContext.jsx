import { createContext, useState } from 'react';

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
        setLocation,
        fetchError, 
        setFetchError,
        favorites, 
        setFavorites,
        isFavorite,
        setIsFavorite, 
        showList,
        setShowList
    }}>
        {children}
    </WeatherContext.Provider>)
}
