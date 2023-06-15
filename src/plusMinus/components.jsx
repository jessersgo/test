
import React, { Component, ReactPropType} from 'react'


class IncDec extends Component{

    constructor(props){
        super(props)
        this.state ={
            count: this.props.number
        }
    }
    //console.log("something")
    inr=()=> {
        this.setState(prevState=>({
            count: prevState.count +1
        }))
    }


    render(){
        return(
            <div>
                <div>initialNum: {this.props.count}</div>
                    <button onClick={this.inr}>+</button>
                    <button></button>
            </div>
        )
    }

}



IncDec.propTypes ={
    number: propTypes.number.isRequired
}

export default IncDec
