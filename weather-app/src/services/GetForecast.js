
const GetForecast = async ({city, days}) => {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=69d842903d3447848df200938252202&q=${city}&days=${days}`;

        const response = await fetch(url);

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.error.message);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}

export default GetForecast;







//working one

// const GetForecast = async (city) => {
//     try {
//         const url = `https://api.weatherapi.com/v1/forecast.json?key=69d842903d3447848df200938252202&q=${city}&days=5`;

//         const response = await fetch(url);

//         if(!response.ok){
//             const errorData = await response.json();
//             throw new Error(errorData.error.message);
//         }

//         const data = await response.json();
//         return data;
        
//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//         throw error;
//     }
// }

// export default GetForecast;
