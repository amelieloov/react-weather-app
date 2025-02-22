import {getCurrentDateTime} from '../../utils/dateUtils';
import './WeatherItem.css'

const WeatherItem = ({item}) => {
    const currentDateTime = getCurrentDateTime();

    return (
        <>
            <div className="startIcon">
                <h2>{item.location.name}</h2>
                <h3>{item?.current?.temp_c}℃</h3>
                <p>{currentDateTime}</p>
            </div>
        </>
    )
}

export default WeatherItem;