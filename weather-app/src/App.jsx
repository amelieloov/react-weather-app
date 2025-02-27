
import './App.css'
import WeatherHeader from './components/WeatherHeader/WeatherHeader.jsx';
import WeatherApp from './components/WeatherApp/WeatherApp.jsx';
import { WeatherProvider } from './context/WeatherContext.jsx';

function App() {

  return (
    <WeatherProvider>
      <header>
        <WeatherHeader />
      </header>
      <main>
        <WeatherApp />
      </main>
    </WeatherProvider>
  )
}

export default App
