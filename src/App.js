import State from "./final";
//import?
import "./App.css";

function App() {
  //counter init

  //increase function
  const increase = () => {};

  //decrease function
  const decrease = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={increase}> + </button>
        <div> {0} </div>
        <button onClick={decrease}> - </button>
      </header>
    </div>
    // <State></State>
  );
}

export default App;
