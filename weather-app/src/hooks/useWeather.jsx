import {useContext, useEffect} from 'react';
import { GetForecastByLatLon, GetLatLonByCityName, GetUserPosition } from '../services/WeatherService.js';

const useWeather = () => {


    useEffect(() => {

        const fetchForecast = async () => {
            try {
                const { lat, lon } = await GetUserPosition();
                fetchForecastByLatLon({ lat, lon });
            } catch (error) {
                console.error("Failed to get user position/weather data:", error);
            }
        };

        fetchForecast();

    }, []);

    const fetchForecastByLatLon = async ({ lat, lon }) => {

        try {
            const data = await GetForecastByLatLon({ lat, lon });
            setWeatherList(data.list.filter((_, index) => index % 8 === 0));
            setLocation(data.city.name);
            setFetchError(null);
        }
        catch (err) {
            setFetchError(err.message);
        }
    }

    const handleSearch = async (newCity) => {

        const coords = await GetLatLonByCityName(newCity);
        if (coords) {
            const { lat, lon } = coords;
            fetchForecastByLatLon({ lat, lon });
        }

        setShowList(false);

        (favorites.includes(newCity) ? setIsFavorite(true) : setIsFavorite(false))
    }

    return {handleSearch, };
}

export default useWeather;