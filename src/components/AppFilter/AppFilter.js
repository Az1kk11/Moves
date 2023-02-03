import { useContext } from 'react'
import { Context } from '../Context'
import './AppFilter.css'

function AppFilter() {
  const {dispatch} = useContext(Context)
  return (
    <div className="btn-group">
        {btns.map(item => (
          <button 
          className='btn btn-secondary active' 
          aria-current='page'
          key={item.name}
          onClick={()=> dispatch({type:'ON_FILTER', payload: item.name})}
          >
            {item.label}
          </button>
        ))}
    </div>
  )
}
export default AppFilter

const btns = [
  {name: 'all', label : 'Hamme kinolar'},
  {name: 'popular', label : 'Xit kinolar'},
  {name: 'mostviewers', label : 'Kop korilgen kinolar'}
]