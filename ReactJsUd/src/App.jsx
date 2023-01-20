import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
      // this.handlePclick = this.handlePclick.bind(this);
        state = {
        nome: 'Gabriel Santos',
        counter: 0
      };
    handlePclick = () => {
      this.setState({nome : 'Batemarque'});
    }
    handleAClick = (event) => {
      event.preventDefault();
      const {counter} = this.state;
      this.setState({counter : counter + 1 });
    }


  render(){
      const {nome, counter} = this.state;
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p onClick={this.handlePclick}>
               {nome} {counter}
              </p>
              <a       
                onClick={this.handleAClick}     
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Este é o link
              </a>
            </header>
          </div>
        );
    }
}

 export default App;
