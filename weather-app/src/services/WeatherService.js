
export const GetCurrentWeather = async ({lat, lon}) => {

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;

    const data = await fetch(url).then(response => response.json());

    return data;

  } catch (error) {
    console.error("Failed to get current weather", error);
  }
};

export const GetForecastByLatLon = async ({lat, lon}) => {

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min`

    const response = await fetch(url);
    const data = await response.json();

    return data;

  } catch (error) {
    console.log("Failed to get forecast:", error);
  }
}

export const GetLatLonByCityName = async (city) => {

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