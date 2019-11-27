import React from 'react';
import './Button.css';

class BotonLol extends React.Component{
    render(){
        return (
            <button className="boton" id="#argh" data-testid={this.props.ti} onClick={()=>this.handleClick()}>{this.props.symbol}</button>
        );
    }
    handleClick(){
        this.props.callClick(this.props.symbol)
    }
}
export default BotonLol;