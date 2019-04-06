import data from './App'

console.log(data)
const initialstate = data

const reducer = (state = initialstate, action = {}) => {
  switch (action.type){
    case 'ADD_MODEL':
    return [...state, action.payload]
    default:
      return state
    }
  }
  
  export default reducer