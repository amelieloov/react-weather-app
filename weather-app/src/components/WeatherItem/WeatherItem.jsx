import {formatDate} from '../../utils/dateUtils';
import { formatTime } from '../../utils/dateUtils';
import './WeatherItem.css'

const WeatherItem = ({item}) => {
    return (
        <>
            <div className="startIcon">
                <h1>{item?.location?.name}</h1>
                <h2>{item?.current?.temp_c}℃</h2>
                <p>{formatDate(item?.location?.localtime)}</p>
                <p>{formatTime(item?.location?.localtime)}</p>
            </div>
        </>
    )
}

export default WeatherItem;