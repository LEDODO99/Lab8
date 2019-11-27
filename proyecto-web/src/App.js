import React from 'react';
import './App.css';
import BotonLol from './Button.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      number: "0"
    };
    this.firstNumber="0";
    this.selectedSymbol="";
    this.pressedASymbol=true;
    this.btnClick=this.btnClick.bind(this)
  }
  render(){
    return (
      <div className="calcLot">
        <input id="#taLOL" data-testid="#texto" className="textCalc" type="text" value={this.state.number} readOnly />
        <BotonLol id="#buton1" ti="#b1" symbol="1" callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton2" ti="#b2" symbol="2" callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton3" ti="#b3" symbol="3" callClick={this.btnClick}  ></BotonLol>
        <BotonLol id="#buton+" ti="#b+" symbol="+" callClick={this.btnClick}  ></BotonLol>
        <BotonLol id="#buton4" ti="#b4" symbol="4"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton5" ti="#b5" symbol="5"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton6" ti="#b6" symbol="6"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton-" ti="#b-" symbol="-"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton7" ti="#b7" symbol="7"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton8" ti="#b8" symbol="8"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton9" ti="#b9" symbol="9"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton*" ti="#b*" symbol="*"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton0" ti="#b0" symbol="0"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#butonC" ti="#bC" symbol="C"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#butonAC" ti="#bAC" symbol="AC"  callClick={this.btnClick} ></BotonLol>
        <BotonLol id="#buton=" ti="#b=" symbol="="  callClick={this.btnClick} ></BotonLol>
      </div>
    )
  }
  btnClick(symbol){
    if(symbol==="+"){
      this.pressedASymbol=true;
      this.firstNumber=parseInt(this.state.number)
      this.selectedSymbol="+"
    }else if (symbol==="-"){
      this.pressedASymbol=true;
      this.firstNumber=parseInt(this.state.number)
      this.selectedSymbol="-"
    }else if(symbol==="*"){
      this.pressedASymbol=true;
      this.firstNumber=parseInt(this.state.number)
      this.selectedSymbol="*"
    }else if(symbol==="AC"){
      this.firstNumber="0"
      this.selectedSymbol=""
      this.setState(()=>{
        return{number: "0"}
      })
    }else if(symbol==="C"){
      this.setState(()=>{
        return{number: "0"}
      })
    }else if(symbol==="="){
      if(!this.pressedASymbol){
        this.pressedASymbol=true;
        if (this.selectedSymbol==="+"){
          var res=this.firstNumber+parseInt(this.state.number)
          if (res>999999999){
            this.setState(()=>{
              return{number: "ERROR"}
            })
          }else{
            this.setState(()=>{
              return{number: res.toString()}
            })
          }
        }else if (this.selectedSymbol==="-"){
          res=this.firstNumber-parseInt(this.state.number)
          if (res<0){
            this.setState(()=>{
              return{number: "ERROR"}
            })
          }else{
            this.setState(()=>{
              return{number: res.toString()}
            })
          }
        }else if (this.selectedSymbol==="*"){
          res=this.firstNumber*parseInt(this.state.number)
          if (res>999999999){
            this.setState(()=>{
              return{number: "ERROR"}
            })
          }else{
            this.setState(()=>{
              return{number: res.toString()}
            })
          }
        }
      }
    }else{
      if(this.state.number==="0"||this.pressedASymbol){
        this.pressedASymbol=false;
        this.setState(()=>{
          return{number: symbol}
        })
      }else{
        if(parseInt(this.state.number)<100000000)
        this.setState(()=>{
          return{number: this.state.number+symbol}
        })
      }
    }
  }

}

export default App;
