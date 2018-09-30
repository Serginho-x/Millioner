import Total from '../components/containers/Total';
import { Route} from 'react-router-dom';
import { Redirect } from 'react-router';
import React from 'react'
import history from '../history' 
const initialState = {
  title: 'Фамилия принца Артаса?',
  first: 'Анвин',
  second: 'Фандрал',
  third: 'Менетил',
  forth: 'Валонфорт',
  total: 0,
  number: 1,
  true: 3,
  picture: `./images/1.jpg`,
  leftbar: `./images/11.jpg`,
}

export function Questions(state = initialState, action) {
 
  switch(action.type) {
      case 'ANSWER_SUCCESS':          
      console.log(action.payload.id[0], "2"); 
      let payload = action.payload.id[0]
        return Object.assign({}, state, {
          total: payload.total,              
          title: payload.title,
          first: payload[1],
          second: payload[2],
          third:  payload[3],
          forth:  payload[4],
          number: state.number + 1,
          picture: payload.picture,
          leftbar: payload.leftbar,             
        }) 
        case 'ANSWER_FAIL':           
        return Object.assign({}, state, {
          total: state.total, 
          title: 'Фамилия принца Артаса?',
          first: 'Анвин',
          second: 'Фандрал',
          third: 'Менетил',
          forth: 'Валонфорт',         
          number: 1,
          true: 3,
          picture: `./images/1.jpg`,
          leftbar: `./images/11.jpg`,      
        }, history.push('/total') )
        case 'WIN_GAME':
        return Object.assign({}, state, {
          total: state.total, 
          title: 'Фамилия принца Артаса?',
          first: 'Анвин',
          second: 'Фандрал',
          third: 'Менетил',
          forth: 'Валонфорт',         
          number: 1,
          true: 3,
          picture: `./images/1.jpg`,
          leftbar: `./images/11.jpg`,      
        }, history.push('/win') )
                  
      default:
      return state
 }
}  

