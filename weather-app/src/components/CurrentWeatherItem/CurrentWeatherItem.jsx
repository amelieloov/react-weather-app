
import { formatDateWithTime } from '../../utils/dateUtils';
import './CurrentWeatherItem.css'

const CurrentWeatherItem = ({item, location}) => {
    return (
        <>
            <div className="startIcon">
                <h4>{location}</h4>
                <h2>{item?.temperature_2m}℃</h2>
                <p>{formatDateWithTime(item?.time)}</p>
            </div>
        </>
    )
}

export default CurrentWeatherItem;