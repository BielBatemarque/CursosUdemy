import { useState, useEffect, useRef} from 'react';

const isObjectEqual = (obja, objb) => {
    return JSON.stringify(obja) === JSON.stringify(objb);
  }

export const useFetch = (url, options) => {
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
      const controller = new AbortController();
      const signal = controller.signal;
      
      setLoading(true);
      const fetchData = async () => {
          await new Promise(r => setTimeout(r, 1000));
        try{
          const response = await fetch(urlRef.current, {signal, ...optionsRef.current});
          const jsonResult = await response.json();
          
          if(!wait){
            setResult(jsonResult);
            setLoading(false);
          }
        }catch(e){
          if(!wait){
            setLoading(false);
          }
          console.log(e);
        }
      }
        fetchData();
        return () => {
          wait = true;
          controller.abort();
        }
    }, [shouldLoad]);
  
    return [result, loading];
  };