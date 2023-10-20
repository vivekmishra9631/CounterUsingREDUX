import React from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        <u>Counter <span className="using">using</span> <span className="redux">Redux</span></u>
      </h1>
      <div className="Counter">
        <button onClick={() => dispatch(increment())}> + </button>
        <h1 className="number">{myState}</h1>
        <button onClick={() => dispatch(decrement())}> - </button>
      </div>
    </div>
  );
}

export default App