import AppFilter from '../AppFilter/AppFilter'
import AppTitle from '../AppTitle/AppTitle'
import MovieList from '../MovieList/MovieList'
import MovisAddForm from '../MovisAddForm/MovisAddForm'
import SaerchPanel from '../SaerchPanel/SaerchPanel'
import Data from '../data/data'

import './App.css'

function App() {
  Data()
  return (
    <div className="container">
      <div className="content">
        <div className="box">
          <AppTitle/>
          <SaerchPanel/>
          <AppFilter/>
        </div>
        <MovieList/>
        <MovisAddForm/>
      </div>
    </div>
  )
}

export default App