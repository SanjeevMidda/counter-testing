import React from "react";
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((counter) => counter + 1);
  const reset = () => setCounter(0);

  const decrease = () => {
    setCounter((counter) => Math.max(0, counter - 1));
  };

  return (
    <>
      <button onClick={increase}>+</button>

      <button onClick={decrease} disabled={counter === 0}>
        -
      </button>

      <button onClick={reset}>R</button>
      <h1>{counter}</h1>
    </>
  );
};

export default Counter;
