import { useContext, useState } from 'react'
import { Context } from '../Context'

const SaerchPanel = () => {
  const [term, setTerm] = useState('')
  const {dispatch} = useContext(Context)
  const updateTermHander = e => {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    dispatch({type:'ON_TERM', payload: term})
  }

  return (
    <div className="saerch-box">
        <input onChange={ updateTermHander } value={term} type="text" className='form-control' />
    </div>
  )
}

export default SaerchPanel