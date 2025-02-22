
const GetWeather = async () => {
    //old url
    //const url = "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=c91f2ad5e3ed3b8e419138dae6415d41";

    const url = "https://api.weatherapi.com/v1/current.json?key=69d842903d3447848df200938252202&q=Stockholm";

    //const url = "https://jsonplaceholder.typicode.com/posts";

    return await fetch(url).then(response => response.json());
}

export default GetWeather;