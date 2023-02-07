 import P, { number } from 'prop-types';
import { useEffect, useState, useMemo, useRef } from 'react';
import './App.css';

const Post = ({ post, handleClick }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
    <h1 onClick={() => handleClick(post.title)} style={{fontSize:'14px'}}>{post.title}</h1>
    <p>{post.body}</p>
  </div>
  );
}

Post.porpTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body:P.string,
  }),
  onclick: P.func,
}

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);
  // mudar o valord e useRef não causa re-renderização
  console.log('Pai renderizou');

//component did Mount

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json()).then((r) => setPosts(r));
  }, []);

  useEffect(()=>{
    input.current.focus();
    console.log(input.current);
  }, [value]);

  useEffect(() => {
    contador.current++;
  });


  const handleClick = (value) => {
      setValue(value);
  }

  return(
    <div className='App'>
      <h6>Renderizou: {contador.current}</h6>
      <p>
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)}/>
      </p>
      {useMemo(() => {
        return posts.length > 0 &&
        posts.map((post) => {
          return <Post key={post.id} post={post} handleClick={handleClick}/>
        })
      }, [posts])}
      {posts.length <= 0 && <p>ainda não existem posts</p> }
    </div>
  )
}

export default App;