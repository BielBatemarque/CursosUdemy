
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Posts } from '../components/Posts';
import { CounterProvider } from '../contexts/CounterProvider';
import { PostsProvider } from '../contexts/PostsProvider';
import './styles.css';

export function App() {

  const history = useHistory();

  useEffect(() => {
      setTimeout(() => {
          history.push('/abc');
      }, 5000);
  }, [history]);


  return(
   <CounterProvider>
    <PostsProvider>
      <div>
      <Posts/>
      </div>
    </PostsProvider>
   </CounterProvider> 
    );
}
