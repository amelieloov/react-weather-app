
import './WeatherContainer.css';
import { useState, useEffect } from 'react';

import ForecastList from '../components/ForecastList/ForecastList.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton.jsx';
import FavoriteList from '../components/FavoriteList/FavoriteList.jsx';
import GetForecastByCity from '../services/GetForecastByCity.js';
import GetForecastByLatLon from '../services/GetForecastByLatLon.js';


const WeatherContainer = () => {

    const [weatherList, setWeatherList] = useState([]);
    const [location, setLocation] = useState("");
    const [fetchError, setFetchError] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [showList, setShowList] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        fetchForecastByLatLon(5);
    }, []);

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
        })
    }

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

    const onFocus = () => setShowList(true);

    return (<div className="forecast-container">
        <div className="upper-part">
            <div className="input-container">
                <div className="search-container">
                    <SearchBar handleSearch={handleSearch} fetchError={fetchError} onFocus={onFocus} onBlur={onBlur} />
                    {showList && <FavoriteList className="dropdown" favorites={favorites} handleSearch={handleSearch} />}
                </div>
                <FavoriteButton toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
            </div>
            <h1 className="right-side-text">Väder i {location}</h1>
        </div>
        <ForecastList list={weatherList} />
    </div>)
}

export default WeatherContainer;