import axios from 'axios';

export const AnswerSuccess = id => {
    return {
      type: 'ANSWER_SUCCESS',
      payload: {
        id
      }
    }
  }

  export const AnswerFail = id => {
    return {
      type: 'ANSWER_FAIL',
      payload: {
        id
      }
    }
  }

  export const WinGame = () => {
    return {
      type: 'WIN_GAME'
      }
    }
 

export const Answer = (payload, number) => {
  if (number !== 10){
  return (dispatch) => {
    return axios.get(`http://localhost:4000/q${number}`)
      .then(response => {      
        if (response.data[0].true === payload+1){
          axios.get(`http://localhost:4000/q${number+1}`)
          .then(response => {               
            dispatch(AnswerSuccess(response.data))
          })
        } else {       
            dispatch(AnswerFail())
        }   
      })
    };
  } else {
    return (dispatch) => {
      dispatch(WinGame())
    }
  }
}
