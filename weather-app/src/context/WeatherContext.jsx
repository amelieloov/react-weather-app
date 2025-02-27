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

    const fetchCurrentWeather = async () => {
        GetCurrentWeather()
        .then(data => {
            setCurrentWeather(data)
        });

    }

    const fetchForecastByCity = async (city, days) => {
        try {
            const data = await GetForecastByCity(city, days);;
            setWeatherList(data.forecast.forecastday);
            setLocation(data.location.name);
            setFetchError(null);
        }
        catch (err) {
            setFetchError(err.message);
        }
    }

    const fetchForecastByLatLon = async (days) => {
        GetForecastByLatLon(days).then(data => {
            setWeatherList(data.forecast.forecastday),
                setLocation(data.location.name);
        })}

    const toggleFavorite = () => {
        if (favorites.includes(location)) {
            setFavorites((prev) => prev.filter(fave => fave !== location));
            setIsFavorite(false);
        } else {
            setFavorites([...favorites, location]);
            setIsFavorite(true);
        }
    }

    const handleSearch = (newCity) => {
        fetchForecastByCity(newCity, 5);
        setShowList(false);

        (favorites.includes(newCity) ? setIsFavorite(true) : setIsFavorite(false))
    }

    const onBlur = () => setTimeout(() => setShowList(false), 100);

    const onFocus= () => setShowList(true);

    return (<WeatherContext.Provider value={{
        currentWeather,
        weatherList, 
        location, 
        fetchError, 
        handleSearch, 
        favorites, 
        isFavorite, 
        toggleFavorite,
        showList,
        fetchCurrentWeather,
        fetchForecastByLatLon,
        fetchForecastByCity,
        onBlur,
        onFocus
    }}>
        {children}
    </WeatherContext.Provider>)
}
