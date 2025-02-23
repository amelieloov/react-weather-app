
import './App.css'
import Weather from './containers/Weather'
import ForecastContainer from './containers/ForecastContainer'
import SearchBar from './components/SearchBar/SearchBar.jsx'

function App() {

  return (
    <>
      <Weather/>
      <SearchBar/>
      {/* <ForecastContainer city="Stockholm"/> */}
    </>
  )
}

export default App
