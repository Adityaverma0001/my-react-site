import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 23) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className='d-flex year'>
        <div className='d-flex'>
           <h4 className='count'>{count}</h4> 
           <span className='plus'>+</span>
        </div>
      <span className='ence'>Years Of <br/> Experience</span>
    </div>
  );
}


function Counter1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 215) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      },10);
      return () => clearTimeout(timer); // cleanup
    }
  }, [count]);

  return (
     <div className='year'>
        <div className='d-flex justify-content-center	'>
           <h4 className='count1'>{count}</h4> 
           <span className='plus1'>+</span>
        </div>
      <span className='ence1'>CURRENT CLIENTS</span>
    </div>
  );
}


function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 550) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      },2);
      return () => clearTimeout(timer); // cleanup
    }
  }, [count]);

  return (
     <div className='year'>
        <div className='d-flex justify-content-center	'>
           <h4 className='count1'>{count}</h4> 
           <span className='plus1'>+</span>
        </div>
      <span className='ence1'>PROJECTS COMPLETE</span>
    </div>
  );
}


function Counter3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 21) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      },50);
      return () => clearTimeout(timer); // cleanup
    }
  }, [count]);

  return (
     <div className='year'>
        <div className='d-flex justify-content-center	'>
           <h4 className='count1'>{count}</h4> 
           <span className='plus1'>+</span>
        </div>
      <span className='ence1'>YEARS OF EXPERIENCE</span>
    </div>
  );
}



function Counter4() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 25) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      },30);
      return () => clearTimeout(timer); // cleanup
    }
  }, [count]);

  return (
     <div className='year'>
        <div className='d-flex justify-content-center	'>
           <h4 className='count1'>{count}</h4> 
           <span className='plus1'>+</span>
        </div>
      <span className='ence1'>OFFICES WORLDWIDE</span>
    </div>
  );
}






export {Counter,Counter1,Counter2,Counter3,Counter4};
