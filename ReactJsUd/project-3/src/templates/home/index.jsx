import { useState, useRef, useLayoutEffect, forwardRef, useImperativeHandle } from 'react';

const Home = () => {
  const [counted, setCounted] = useState([0,1,2,3,4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while(Date.now() < now + 600);
    divRef.current.divRef.scrollTop = divRef.current.scrollHeight;
  });

  const handleCLick = () => {
    setCounted(c => [...c, + c.slice(-1) + 1]);
    divRef.current.handleClick();
  };


  return(
    <>
      <button onClick={handleCLick}>Count: {counted.slice(-1)}</button>
        <DispplayCounted  counted={counted} ref={divRef}/>
    </> 
  );
}

export const DispplayCounted = forwardRef( function DisplayCounted ({counted}, ref){
  const [rand, setRand] = useState('0.24');
  const divRef = useRef();

  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));

 
  return(   
    <div ref={divRef} style={{height: '100px', width:'100px', overflowY: 'scroll' }}>
    {counted.map((c) => {
    return <p key={`c-${c}`}
      onClick={handleClick}
    >{c} +++ {rand}</p>
  })}
  </div>
  );
})

export default Home;