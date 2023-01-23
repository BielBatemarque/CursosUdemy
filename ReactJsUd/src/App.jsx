import './App.css';
import { Component } from 'react';

class App extends Component{
      // this.handlePclick = this.handlePclick.bind(this);
        state = {
          conter: 0,
          posts: [
            {
              id:1,
              title:'o titulo 1',
              body: 'O corpo 1'
            },
            {
              id:2,
              title:'o titulo 2',
              body: 'O corpo 2'
            },
            {
              id:3,
              title:'o titulo 3',
              body: 'O corpo 3'
            }
          ]
      };
      timeOutUpdate = null;


      componentDidMount(){
        //faz assim que o componente é montado na pagina
        this.handleTimeOut();
      }

      componentDidUpdate(){
        //disparado quando o componente é atualizado
        this.handleTimeOut();
      }

      componentWillUnmount(){
        clearTimeout(this.timeOutUpdate);
      }

      handleTimeOut = () => {
        const { posts, conter } = this.state;
        posts[0].title = 'O titulo mudou';

      this.timeOutUpdate =  setTimeout(() => {
          this.setState({ posts, conter: conter + 1 })
        }, 1000);
      }

  render(){
      const { posts, conter } = this.state;
    return (
          <div className="App">
            <h1>{conter}</h1>
            {posts.map((post) => { return(
              <div key={post.id}>
              <h1>{post.title}</h1>
             <p>{post.body}</p>
            </div>
            )})}
          </div>
        );
    }
}

 export default App;
