import { useContext } from 'react'
import '../AppTitle/AppTitle.css'
import { Context } from '../Context'

function AppTitle() {
  const {state} = useContext(Context)
  return (
    <div className="title-box">
        <h3>Hamme kinolar: { state.data.length } </h3>
        <h3>Korilgen kinolar: { state.data.filter(c => c.cookie).length}</h3>
    </div>
  )
}

export default AppTitle