import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Rules extends Component {
    render(){
        return(
            <div>
                <div className="title"> Правила</div>
                <h2 className="rule">
                    <p>1) Ответьте правильно на 10 вопросов, чтобы выиграть главный приз</p>
                    <p>2) Каждый вопрос содержит 4 варианта ответов и только один правильный</p> 
                    <p>3) Вы можете воспользоваться подсказкой "50:50" 2 раза за игру</p>  
                </h2>
                <Link to="/"> 
                        <div  className="title">Выйти в меню</div>
                </Link> 
             </div> 
        )

    }
}

export default Rules