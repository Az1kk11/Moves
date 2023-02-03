import { useContext, useState } from 'react';
import { ToastContainer , toast } from 'react-toastify';
import { Context } from '../Context';
import './MovisAddForm.css';
import 'react-toastify/dist/ReactToastify.css';

function MovisAddForm () {
  const [ state, setstate ] = useState ({ name: '', viewers: '' })
  const { dispatch } = useContext( Context )
  const onChange = e => { setstate ({ ...state, [ e.target.name ] : e.target.value })}
  const addPrevInput = e => {
    e.preventDefault()
    if( state.name === '' || state.viewers === '' ){ return alertt() }
    const data = { name: state.name, viewers: state.viewers }
    dispatch({ type: 'ON_ADD_FORM', payload: data })
    setstate({ name: '', viewers: '' })
  }

  const alertt = () => toast.warn('Iltimas belgilengen orinlardi toliqtirin', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  return (
    <div className="movisaddbox">
        <h3 className='fs-5 fw-normal'>Taza kino qosiw</h3>
        <form className='d-flex' onSubmit={ addPrevInput }>
            <input onChange = { onChange }
            name = 'name'
            value = { state.name }
            type = "text" 
            className = 'form-control me-4'
            placeholder = 'Kino ati ?' />
            <input onChange = {onChange}
            name = 'viewers'
            value = { state.viewers } 
            type = "number" 
            className = 'form-control' 
            placeholder = 'Nishe marte korilgen ?' />
            <button className = 'btn btn-outline-primary ms-4'>Qosiw</button>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default MovisAddForm