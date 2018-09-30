import { combineReducers } from 'redux'
import  {Questions}  from './question'


export const rootReducer = combineReducers({
  questions: Questions,  
})
