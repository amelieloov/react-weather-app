
// const GetWeather = async () => {
//     //old url
//     //const url = "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=c91f2ad5e3ed3b8e419138dae6415d41";

//     const url = "https://api.weatherapi.com/v1/current.json?key=69d842903d3447848df200938252202&q=Stockholm";

//     //const url = "https://jsonplaceholder.typicode.com/posts";

//     return await fetch(url).then(response => response.json());
// }

// export default GetWeather;




// const GetWeather = async (days) => {
//     try{
//     navigator.geolocation.getCurrentPosition(async (position) => {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     console.log(lat, lon);

//     const url = `https://api.weatherapi.com/v1/forecast.json?key=69d842903d3447848df200938252202&q=${lat},${lon}&days=${days}`;

//     const response = await fetch(url);

//     if(!response.ok){
//         const errorData = await response.json();
//         throw new Error(errorData.error.message);
//     }

//     const data = await response.json();
//     console.log("data", data);

//     return data;

// })}   catch (error) {
//     console.error("Error fetching weather data:", error);
//     }
// }

// export default GetWeather;


const GetForecastByLatLon = (days) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                const url = `https://api.weatherapi.com/v1/forecast.json?key=69d842903d3447848df200938252202&q=${lat},${lon}&days=${days}`;

                try {
                    const response = await fetch(url);
                    const data = await response.json();

                    resolve(data); // Resolve the promise with the weather data
                } catch (error) {
                    reject(error); // Reject the promise if there's an error
                }
            },
            (error) => {
                reject(error); // Reject the promise if geolocation fails
            }
        );
    });
};

export default GetForecastByLatLon;
