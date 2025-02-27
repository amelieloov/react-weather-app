
import './App.css'
import WeatherHeader from './containers/WeatherHeader.jsx';
import WeatherContainer from './containers/WeatherContainer.jsx';

function App() {

  return (
    <>
      <header>
        <WeatherHeader />
      </header>
      <main>
        <WeatherContainer />
      </main>
    </>
  )
}

export default App
