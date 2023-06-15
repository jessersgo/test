
import React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
class IncDec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.count
        };
    }

    inr = () => {
        this.setState(prevState => ({
            number: prevState.number + 1
        }));
    }

    dnr = () => {
        if( this.state.number !== 0 ){
            this.setState(prevState => ({
                number: prevState.number - 1
            }))
        }else{
            alert("cannot be less than zero!")
        }
    }

      render() {
        return (
            // className "container" would be refered as a css selector later on.
          <div className="container">
            <h1>InitialNum: {this.props.count}</h1>  
                <h2>Increment or Decrement Me: {this.state.number}</h2>
              <button className="increment-button" onClick={this.inr}>+</button>
              <button className="decrement-button" onClick={this.dnr}>-</button>
          </div>
          
        );
      }
      
}

IncDec.propTypes = {
    count: PropTypes.number.isRequired
};

export default IncDec;
