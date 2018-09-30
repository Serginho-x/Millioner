import React, {Component} from 'react';
import load from '../../images/load.jpg';
import start from '../../images/start.png';
import rules from '../../images/rules.png';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render(){
        return(
            <div>
            <img className='picture' src={load} alt="load" />
          <Link to="/game"> 
            <img  className="start" src={start}/>
          </Link>
          <Link to="/rules"> 
            <img   className="rules" src={rules} />
          </Link>
        </div>
        )
    }
}

export default Menu