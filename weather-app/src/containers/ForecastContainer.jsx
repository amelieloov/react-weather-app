
import { useState, useEffect } from 'react';
import ForecastList from '../components/ForecastList/ForecastList.jsx';
import GetForecastByCity from '../services/GetForecastByCity.js';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import './ForecastContainer.css';
import GetForecastByLatLon from '../services/GetForecastByLatLon.js';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton.jsx';
import FavoriteList from '../components/FavoriteList/FavoriteList.jsx';

const ForecastContainer = () => {
    const [weatherList, setWeatherList] = useState([]);
    const [location, setLocation] = useState("");
    const [error, setError] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [showList, setShowList] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        GetForecastByLatLon(5).then(data => {
            setWeatherList(data.forecast.forecastday),
                setLocation(data.location.name);
        });
    }, []);

    const handleAddFavorite = () => {
        if (favorites.includes(location)) {
            setFavorites((prev) => prev.filter(fave => fave !== location));
            setIsFavorite(false);
        } else {
            setFavorites([...favorites, location]);
            setIsFavorite(true);
        }
    }

    const handleListItemClick = (city) => {
        fetchForecast(city, 5);
        setShowList(false);

        (favorites.includes(city) ? setIsFavorite(true) : setIsFavorite(false))
    }

    const handleSearch = (newCity) => {
        fetchForecast(newCity, 5);
        setShowList(false);

        (favorites.includes(newCity) ? setIsFavorite(true) : setIsFavorite(false))
    }

    const fetchForecast = async (city, days) => {
        try {
            const data = await GetForecastByCity(city, days);;
            setWeatherList(data.forecast.forecastday);
            setLocation(data.location.name);
            setError(null);
        }
        catch (err) {
            setError(err.message);
        }
    }

    return (<div className="forecast-container">
        <div className="upper-part">
            <div className="input-container">
                <div className="search-container">
                    <SearchBar onBlur={() => setTimeout(() => setShowList(false), 100)} onFocus={() => setShowList(true)}
                        onSearch={handleSearch} error={error} />
                    {showList && <FavoriteList className="dropdown" handleListItemClick={handleListItemClick}
                        favoriteList={favorites} />}
                </div>
                <FavoriteButton handleAddFavorite={handleAddFavorite} isFavorite={isFavorite} />
            </div>
            <h1 className="right-side-text">Väder i {location}</h1>
        </div>
        <ForecastList list={weatherList} />
    </div>)
}

export default ForecastContainer;