import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import ceci from './ceci'

export default combineReducers({
  routing: routerReducer,
  counter,
  ceci
})