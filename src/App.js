import { useState } from "react";

// create a counter app
// should include functionalities to increase, decrease and reset
// deal with edge cases - what if it goes below 0?

// somewhere to store our counter value - useState
// functions to increase, decrease and reset
// buttons to increase, decrease and reset

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter((counter) => counter + 1);
  const reset = () => setCounter(0);

  const decrease = () => {
    setCounter((counter) => Math.max(0, counter - 1));
  };
  return (
    <div className="App">
      <button onClick={increase}>+</button>

      <button onClick={decrease}>-</button>

      <button onClick={reset}>R</button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
