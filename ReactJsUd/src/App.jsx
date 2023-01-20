import './App.css';
import { Component } from 'react';

class App extends Component{
      // this.handlePclick = this.handlePclick.bind(this);
        state = {
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


  render(){
      const { posts } = this.state;
    return (
          <div className="App">
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
