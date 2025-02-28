
import './App.css'
import WeatherContainer from './containers/WeatherContainer.jsx';
import { WeatherProvider } from './context/WeatherContext.jsx';

function App() {

  return (
    <WeatherProvider>
        <WeatherContainer />
    </WeatherProvider>
  )
}

export default App
