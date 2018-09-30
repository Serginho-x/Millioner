import React from 'react';
import { connect } from 'react-redux'
import {Answer} from '../../actions/QuestionsAction';
import {Card} from  '../presentationals/Card';

class Page extends React.Component {   

  render() {
    const {questions, dispatchAction} = this.props; 
    
    return (
      <div>
      <Card
        title = { questions.title }
        first = { questions.first }
        second = { questions.second }
        third = { questions.third }
        forth = {questions.forth }
        number =  {questions.number }
        picture = {questions.picture}
        leftbar = {questions.leftbar}
        dispatchAction = {dispatchAction}       
      />      
      </div>              
    )
  }
}

const mapStateToProps = store => {
    return {
      questions: store.questions  
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatchAction: (item, number) => dispatch(Answer(item, number)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)
