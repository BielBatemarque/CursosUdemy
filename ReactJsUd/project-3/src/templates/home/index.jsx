import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (obja, objb) => {
  return JSON.stringify(obja) === JSON.stringify(objb);
}

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  useEffect(() => {
    var changed = false;

    if(!isObjectEqual(options, optionsRef.current)){
      optionsRef.current = options;
      changed = true;
    }
    if(!isObjectEqual(url, urlRef.current)){
      urlRef.current = url;
      changed = true;
    }

    if(changed){
      setShouldLoad(s => !s);
    }
  }, [url,options]);
  
  useEffect(() => {
    var wait = false;

    setLoading(true);
    const fetchData = async () => {
        await new Promise(r => setTimeout(r, 1000));
      try{
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();
        
        if(!wait){
          setResult(jsonResult);
          setLoading(false);
        }
      }catch(e){
        if(!wait){
          setLoading(false);
        }
        throw e;
      }
    }
      fetchData();
      return () => {
        wait = true;
      }
  }, [shouldLoad]);

  return [result, loading];
};

const Home = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    headers: {
      abc: '1' + postId,
    }
  });

    useEffect(() => {
      console.log('ID do post', postId);
    }, [postId]);

  //  console.log(result);
   if(loading){
    return <p>Loading ...</p>
   }
   
   const handleClick = (id) => {
     setPostId(id);
   }

   if(!loading && result){
    return <div>
      {result?.length > 0 ? result.map(p => (
        <div key={`post-${p.id}`} onClick={() => handleClick(p.id)}> 
          <p>{p.title}</p>
        </div>
      )) : (
        <div onClick={() => handleClick('')}> 
          <p>{result.title}</p>
        </div>
      )}
    </div>
   } 

  return <h1>oi</h1>
}

export default Home;