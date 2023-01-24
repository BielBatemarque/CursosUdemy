import './App.css';
import { Component } from 'react';

class App extends Component{
      // this.handlePclick = this.handlePclick.bind(this);
        state = {
          posts: []
      };


      componentDidMount(){
      this.LoadPosts();
      } 

      LoadPosts = async () => { 
       const postsResponse =  fetch('https://jsonplaceholder.typicode.com/posts');
        
       const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

        const [ posts, photos] = await Promise.all([postsResponse, photosResponse])
        const postsJson = await posts.json();
        const photosJson = await photos.json();

        const postAndPhotos = postsJson.map((post, index) => {
          return { ...post, cover: photosJson[index].url}
        });

        this.setState({ posts: postAndPhotos});
      }

  render(){
      const { posts } = this.state;
    return (
      <section className='container'>
          <div className="posts">
            <h1>{}</h1>
            {posts.map((post) => { return(
              <div className="post">
                <img src={post.cover} alt="alternativo" />
                <div key={post.id} className="post-content">
                 <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
          </div>
            )})}
          </div>
      </section>

        );
    }
}

 export default App;
