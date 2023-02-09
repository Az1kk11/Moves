import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import  { randomColor } from 'randomcolor'
import Draggable from 'react-draggable'

import './app.css'

const App = () => {
    const [item, setItem] = useState('')
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('items')) || [] 
    )

    useEffect(()=>{
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    const newItem = (e) =>{
        e.preventDefault()
        if(item.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                item,
                color: randomColor({
                    luminosity: 'light'
                }),
                defaultPos: {
                    x: 0,
                    y: 0
                }
            }
            setItems((items) => [...items, newItem])
            setItem('')         
        }else{
            alert('Enter something...')
            setItem('')
        }
    }
    const deleteNode = (id) => {    
        setItems(items.filter((item) => item.id !== id ))
    }
    const updatePos = (data, index) => {
        let newArr = [...items]
        newArr[index].defaultPos = { x : data.x-100, y : data.y-100}
        setItems(newArr)
    }
  return (
    <div className='box'>
        <form>
            <input type="text" 
            value={item}
            placeholder='Enter something...'
            onChange={(e) => setItem(e.target.value)}/>
            <button className='btn' onClick={newItem} >Enter</button>
        </form>
        {
            items.map((item, index)=>{
                return(
                    <Draggable 
                    width={'100vw'}
                    height={'100vh'}
                    key={item.id}
                    defaultPosition={item.defaultPos}
                    onStop={(data)=>{updatePos(data, index)}}
                    >
                        <div className="todo_list" style={{backgroundColor: item.color}} >
                            {item.item}
                            <button className='btn' onClick={()=>deleteNode(item.id)}>x</button>
                        </div>
                    </Draggable>
                )
            })
        }
    </div>
  )
}

export default App