import { useContext } from 'react'
import { Context } from '../Context'
import MovieListItem from '../MovieListItem/MovieListItem'
import { filterHander, saerchHander } from '../utilits/function'
import './MovieList.css'

function MovieList() {
  const {state} = useContext(Context)
  const data = filterHander(saerchHander(state.data, state.term), state.filter)
  return (
    <ul>
      {data.map(item => (
        <MovieListItem key={item.id} {...item} />
      ))}
    </ul>
  )
}

export default MovieList