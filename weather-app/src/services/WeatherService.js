
const GetCurrentWeather = async ({lat, lon}) => {

  try {

    console.log("in currentweather", lat, lon);

    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c91f2ad5e3ed3b8e419138dae6415d41&units=metric`;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;

    const data = await fetch(url).then(response => response.json());

    return data;

  } catch (error) {
    console.error("Failed to get current weather", error);
  }

};


const GetForecastByLatLon = async ({lat, lon}) => {

  try {
    console.log("in forecast", lat, lon);

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min`
    //const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=c91f2ad5e3ed3b8e419138dae6415d41&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    return data;

  } catch (error) {
    console.log("Failed to get forecast:", error);
  }
}

const GetLatLonByCityName = async (city) => {

  //const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=c91f2ad5e3ed3b8e419138dae6415d41`;
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=sv&format=json`;

  try {
    const data = await fetch(url).then(response => response.json()).then(data => data);

    const name = data.results[0].name;
    const lat = data.results[0].latitude;
    const lon = data.results[0].longitude;

    return{ name, lat, lon };
  }
  catch (error) {
    console.error(error);
  }
}


const GetUserPosition = () => {
  try {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude
            });
          },
          (error) => {
            reject(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 2000
          }
        );
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  } catch (error) {
    console.log("Error while getting position:", error)
  }

};

export { GetCurrentWeather, GetForecastByLatLon, GetLatLonByCityName, GetUserPosition };