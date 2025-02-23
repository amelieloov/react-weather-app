import {useState, useEffect} from 'react';
import ForecastList from '../components/ForecastList/ForecastList.jsx';
import GetForecast from '../services/GetForecast';

const ForecastContainer = ({city}) => {
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        GetForecast({city})
        .then(data => {
            setWeatherList(data.forecast.forecastday)
        });
    }, [city]);

    console.log("State:", weatherList);

    return(<ForecastList list={weatherList}/>)
}

export default ForecastContainer;