import { createContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';


const initailValue = {
    data :[],
    term : '',
    filter: 'all'
}

export const Context = createContext()

const reducer = (state = initailValue, action) => {
    const {type, payload} = action

    switch (type) {
        case 'GET_DATA':
            return {...state, data: payload}

        case 'ON_DELETE':
            const onDelteArr = state.data.filter(z => z.id !== payload)
            return {...state, data: onDelteArr}
        case 'ON_TOGGLE_PROP':
            const {id, prop} = payload
            const onToggleArr = state.data.map(item => {
                if(item.id === id){
                    return{...item, [prop]: !item[prop]}
                }
                return item
            })
            return {...state, data: onToggleArr}

        case 'ON_ADD_FORM':
            const {name, viewers} = payload
            const addFormArr = {
                name,
                viewers,
                id: uuidv4(),
                cookie: false,
                like: false
            }
            return {...state, data: [...state.data, addFormArr]}
        
        case 'ON_TERM':
            return { ...state, term: payload}

        case 'ON_FILTER':
            return { ...state, filter: payload }
        default:
            return { state }
    }
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initailValue)

    return <Context.Provider value={{ state, dispatch }} >{children}</Context.Provider>
}

export default Provider