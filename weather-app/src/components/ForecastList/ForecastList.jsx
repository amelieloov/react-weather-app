import ForecastItem from '../ForecastItem/ForecastItem.jsx';
import './ForecastList.css'

const ForecastList = ({list}) => {
    const weatherList = list.map(item => {
        return(<ForecastItem item={item} key={crypto.randomUUID()}/>)
    });

    return(<div className="forecastListStyle">{weatherList}</div>)
}

export default ForecastList;