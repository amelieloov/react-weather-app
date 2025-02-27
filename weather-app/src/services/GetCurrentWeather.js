
const GetCurrentWeather = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
  
          const url = `https://api.weatherapi.com/v1/current.json?key=69d842903d3447848df200938252202&q=${lat},${lon}`;
          
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
  
  export default GetCurrentWeather;
  
