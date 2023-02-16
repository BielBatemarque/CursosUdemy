import { useState, useRef, useLayoutEffect } from 'react';

const Home = () => {
  const [counted, setCounted] = useState([0,1,2,3,4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while(Date.now() < now + 600);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleCLick = () => {
    setCounted(c => [...c, + c.slice(-1) + 1]);
  };


  return(
    <>
      <button onClick={handleCLick}>Count: {counted.slice(-1)}</button>
      <div ref={divRef} style={{height: '100px', width:'100px', overflowY: 'scroll' }}>
        {counted.map((c) => {
        return <p key={`c-${c}`}>{c}</p>
      })}
      </div>
    </>
  );
}

export default Home;