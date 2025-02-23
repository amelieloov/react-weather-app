
const GetForecast = (city) => {
    //old url
    //const url = "api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=c91f2ad5e3ed3b8e419138dae6415d41";

    const url = `https://api.weatherapi.com/v1/forecast.json?key=69d842903d3447848df200938252202&q=${city}&days=7`;

    const data = fetch(url).then(response => response.json());

    return data;
}

export default GetForecast;