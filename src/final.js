import { useState } from "react";
import "./App.css";

function State() {
  const [count, setCount] = useState(0);
  // let count = 0;

  // if (true) {
  //   setCount("hello");
  // }
  //increase function
  function increase() {
    //count++;
    setCount(count + 1);
    console.log(count);
  }

  //decrease function
  const decrease = () => {
    //count--;
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={increase}> + </button>
        <div> {count} </div>
        <button onClick={decrease}> - </button>
      </header>
    </div>
  );
}

export default State;
