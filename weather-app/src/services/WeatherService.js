
const GetCurrentWeather = async ({ lat, lon }) => {

  try {

    console.log("current lat", lat)
    console.log("current lon", lon)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c91f2ad5e3ed3b8e419138dae6415d41&units=metric`;

    const data = await fetch(url).then(response => response.json());

    return data;

  } catch (error) {
    console.error("Failed to get current weather", error);
  }

};


const GetForecastByLatLon = async ({ lat, lon }) => {

  try {
    console.log("forecast lat", lat)
    console.log("forecast lon", lon)

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=c91f2ad5e3ed3b8e419138dae6415d41&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    return data;

  } catch (error) {
    console.log("Failed to get forecast:", error);
  }
}


const GetLatLonByCityName = async (city) => {

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=c91f2ad5e3ed3b8e419138dae6415d41`;

  try {
    const data = await fetch(url).then(response => response.json()).then(data => data);

    const { lat, lon } = data[0];

    console.log("getcoords lat", lat);
    console.log("getcoords lon", lon)

    return { lat, lon };
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