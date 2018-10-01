import React from 'react';
import { connect } from 'react-redux';
import total from '../../images/total.png';
import { Link } from 'react-router-dom';

class Total extends React.Component {
    render(){
        const {questions} =this.props ;
        console.log(questions.failtotal);
        return( 
            <div>                     
                <div className="title">Ваш выигрыш составил</div>
                <img className="picture" src={total}/>
                <div className="title">{questions.failtotal} &nbsp; золотых</div>
                <Link to="/"> 
                    <div  className="title">Выйти в меню</div>
                </Link>
            </div>  
        )
    }
}
const mapStateToProps = store => {
    return {
      questions: store.questions  
  }
}
export default connect(
    mapStateToProps    
  )(Total)
