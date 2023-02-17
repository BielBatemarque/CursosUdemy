import { useDebugValue, useEffect, useState } from 'react';

const useMediaQuerry = (queryValue, initialValue = false) => {
  const[match, setMatch] = useState(initialValue);

  useDebugValue(`Querry: ${queryValue}`);

  useEffect(() =>{
    var isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () =>{
      if(!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(!!matchMedia.matches);
    
    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    }

  }, [queryValue]);

  return match;
}

const Home = () => {
 const huge =  useMediaQuerry('(min-width: 980px)');
 const big = useMediaQuerry('(max-width: 978px) and (min-width: 768px)');
 const medium = useMediaQuerry('(max-width: 767px) and (min-width: 321px)');
 const small = useMediaQuerry('(max-width: 321px)');
 

 const background = huge ? 'green' : big ? 'red' : medium ? 'yellow' :small ? 'purple' : null;
 return(
    <div style={{fontSize: '60px', background}}>oi</div>
  );
}

export default Home;