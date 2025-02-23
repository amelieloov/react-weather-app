
import './App.css'
import Weather from './containers/Weather'
import ForecastContainer from './containers/ForecastContainer'
import FavoriteButton from './components/FavoriteButton/FavoriteButton'

function App() {

  return (
    <>
      <Weather/>
      <ForecastContainer city="Stockholm"/>
    </>
  )
}

export default App
