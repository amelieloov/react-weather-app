import ForecastItem from '../ForecastItem/ForecastItem.jsx';

const ForecastList = ({list}) => {
    const weatherList = list.map(item => {
        return(<ForecastItem item={item} key={crypto.randomUUID()}/>)
    });

    return(<>{weatherList}</>)
}

export default ForecastList;