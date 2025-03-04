import { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weatherList, setWeatherList] = useState([]);
    const [location, setLocation] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [showList, setShowList] = useState(false);
    const [currentWeather, setCurrentWeather] = useState({});
    
    const [isFavorite, setIsFavorite] = useState(() => {
        const savedIsFavorite = localStorage.getItem("isFavorite");
        return savedIsFavorite ? JSON.parse(savedIsFavorite) : false;
    });
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });
    
    return (<WeatherContext.Provider value={{
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
        setShowList,
        currentWeather,
        setCurrentWeather
    }}>
        {children}
    </WeatherContext.Provider>)
}
