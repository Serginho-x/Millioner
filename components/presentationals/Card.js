import React from 'react'
import PropTypes from 'prop-types'
import rigth from '../../images/50.png';

export class Card extends React.Component {            
      renderButtons() {
        const { first, second, third, forth, number } = this.props
        const buttons = [first, second, third, forth]        
          return buttons.map((item, index,) => {
            return (
              <button key={index} className="btn" onClick={(e) => this.props.dispatchAction( index, number)}>
                  {item}
              </button>
            
          )
        })
      }
       render() {
        const {title, leftbar, picture} =this.props
        return (
          <div>
            <p className="title">{title}</p>
            <div className="tools">             
              <img className="leftbar" src={leftbar} />
              <img className="pictures" src={picture} />
              <div className="rightbar">
                <button className="rigth">
                  <img  src={rigth} />
                </button >
              </div>
            </div>
            <p className="buttons">{this.renderButtons()}</p>
          </div>                      
        )
    }
}

// Card.propTypes = {
//   title: PropTypes.string,
//   first: PropTypes.string,
//   second: PropTypes.string,
//   third: PropTypes.string,
//   forth: PropTypes.string,
//   dispatchAction: PropTypes.func.isRequired,
// }
