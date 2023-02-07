import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, reset } from './Redux/actions/countActions';

function App() {
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector(state => state.countReducer.count);
  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
      <h4>{count}</h4>
      <button onClick={() => {dispatch(increment(Number(num)))}}>(+)</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => {dispatch(decrement(Number(num)))}}>(-)</button>
    </div>
  );
}

export default App;
