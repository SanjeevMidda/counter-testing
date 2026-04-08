import { useState } from "react";
import "./App.css";

// create a counter app
// should include functionalities to increase, decrease and reset
// deal with edge cases - what if it goes below 0?

// somewhere to store our counter value - useState
// functions to increase, decrease and reset
// buttons to increase, decrease and reset

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const reset = () => setCounter(0);

  return <div className="App"></div>;
}

export default App;
