import WeatherItem from '../WeatherItem/WeatherItem.jsx';

const WeatherList = ({list}) => {
    const weatherList = list.map(item => {
        return(<DetailedWeatherItem item={item}/>)
    });

    return(<>{weatherList}</>)
}

export default WeatherList;