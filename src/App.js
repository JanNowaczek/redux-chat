import React from 'react'

import { store } from './store'

store.dispatch({})
store.dispatch({
  type: 'SET',
  users: [],
})

console.log(store.getState())

const App = (props) => (
  <div>
    
  </div>
)

export default App