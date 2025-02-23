import { formatDate } from "../../utils/dateUtils";
import { formatWeekday } from "../../utils/dateUtils";
import './ForecastItem.css';

const DetailedWeatherItem = ({item}) => {
    const currentDateTime = formatDate();
    
    return(
    <>
        <div className="forecastStyle">
            <p>{formatWeekday(item?.date)}</p>
            <p>{formatDate(item?.date)}</p>
            <h1>{item?.day?.maxtemp_c}℃</h1>
            <h5>{item?.day?.mintemp_c}℃ min</h5>
            <img src={item.day.condition.icon} alt="nope" />
        </div>
    </>
    )
}

export default DetailedWeatherItem;