import './styles.css'
import { Component } from "react";

export class Button extends Component{
    render(){
        const {text, onClick, disabled} = this.props
      return(
      <button disabled={disabled} onClick={onClick} className="button">
            {text}
       </button>
       );
    }
}