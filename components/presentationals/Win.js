import React from 'react';
import zoloto from '../../images/zoloto.png';
import { Link } from 'react-router-dom';

class Total extends React.Component {
    render(){        
        return( 
            <div>                     
               <div className="title">Поздравляем</div>
                <img className="picture" src={zoloto}/>
                <Link to="/"> 
                    <div  className="title">Выйти в меню</div>
                </Link>                
            </div>          
        )    
    }
}
export default Total
