import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>

      <h3>Counter Componenet to Increment and decrement Count on button Click</h3>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Click Here Increment the Count</button>   
      <button onClick={decrementCount}>Click Here Decrement the Count</button>
    </div>
  );
}

export default Counter;
