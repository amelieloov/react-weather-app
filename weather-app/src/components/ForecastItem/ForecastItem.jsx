import { getCurrentDateTime } from "../../utils/dateUtils";
import './ForecastItem.css';

const DetailedWeatherItem = ({item}) => {
    const currentDateTime = getCurrentDateTime();
    
    return(
    <>
        <div className="forecastStyle">
            <h2>Temperature max/min</h2>
            <h2>{item?.day?.maxtemp_c}</h2>
            <h2>{item?.day?.mintemp_c}</h2>
            <p>{currentDateTime}</p>
            <img src={item.day.condition.icon} alt="nope" />
        </div>
    </>
    )
}

export default DetailedWeatherItem;