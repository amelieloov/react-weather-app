import WeatherItem from '../WeatherItem/WeatherItem.jsx';

const WeatherList = ({list}) => {
    const weatherList = list.map(item => {
        return(<WeatherItem item={item}/>)
    });

    return(<>{weatherList}</>)
}

export default WeatherList;