import { createStore } from './redux'

const rootReducer = (state, action) => {
  switch(action.type){
      case 'SET':
          return{
              ...state,
              users: action.users,
          }
      default:
          return state
  }
}

export const store = createStore(rootReducer)

store.dispatch({})
store.dispatch({
  type: 'SET',
  users: [],
})

console.log(store.getState())