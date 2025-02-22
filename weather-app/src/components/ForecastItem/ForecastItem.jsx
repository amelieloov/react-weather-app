import { getCurrentDateTime } from "../../utils/dateUtils";

const DetailedWeatherItem = ({item}) => {
    const currentDateTime = getCurrentDateTime();
    
    return(
    <>
        <div>
            <h1>{item?.day?.maxtemp_c}</h1>
            <p>{currentDateTime}</p>
        </div>
    </>
    )
}

export default DetailedWeatherItem;