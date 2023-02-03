import { useEffect, useContext } from "react"
import { Context } from "../Context"
const Data = () => {
    const {dispatch} = useContext(Context)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            const newdata = data.map(item => ({
                name: item.name,
                id: item.id,
                cookie: false,
                like: false,
                viewers: item.id * 200000
            }))
            dispatch({type: 'GET_DATA', payload: newdata})
        })
    },[])    
}
export default Data
