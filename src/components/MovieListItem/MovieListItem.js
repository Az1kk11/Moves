import { useContext } from 'react';
import { Context } from '../Context';
import './MovieListItem.css';

const MovieListItem = props => {
  const {name, viewers, cookie, like, id} = props
  const { dispatch } = useContext(Context)
  const onDelete = () => { dispatch({type : 'ON_DELETE', payload: id})}
  const onToggle = e => {
    const payload = {
      id,
      prop : e.currentTarget.getAttribute('data-toggle')
    }
    dispatch({type: 'ON_TOGGLE_PROP', payload})
  }

  return (
    <li className={`${cookie && 'cookie'} ${like && 'like'}`}>
        <span onClick={onToggle} className={`fw-normal`} data-toggle='like'>{name}</span>
        <h4>viewers: {viewers} </h4>
        <div className='icon-box'>
            <div className="btn-box">
                <button className='btn btn-outline-warning' onClick={onToggle} data-toggle='cookie'><i className="fa-solid fa-cookie"></i></button>
                <button className='btn btn-outline-danger' onClick = { onDelete } ><i className="fa-solid fa-trash"></i></button>
            </div>
            <i className="fa-solid fa-star"></i>
        </div>
    </li>   
  )
}

export default MovieListItem