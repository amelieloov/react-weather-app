
import './WeatherApp.css';
import { useContext, useEffect } from 'react';
import { WeatherContext } from '../../context/WeatherContext.jsx';

import ForecastList from '../ForecastList/ForecastList.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';
import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx';
import FavoriteList from '../FavoriteList/FavoriteList.jsx';

const WeatherApp = () => {
    const {weatherList, location, fetchForecastByLatLon, favorites, isFavorite, toggleFavorite, showList, setShowList, onBlur, onFocus} = useContext(WeatherContext);

    useEffect(() => {
        fetchForecastByLatLon(5);
    }, []);

    return (<div className="forecast-container">
        <div className="upper-part">
            <div className="input-container">
                <div className="search-container">
                    <SearchBar />
                    {showList && <FavoriteList className="dropdown"/>}
                </div>
                <FavoriteButton toggleFavorite={toggleFavorite} isFavorite={isFavorite} />
            </div>
            <h1 className="right-side-text">Väder i {location}</h1>
        </div>
        <ForecastList list={weatherList} />
    </div>)
}

export default WeatherApp;