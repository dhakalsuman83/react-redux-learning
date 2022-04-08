import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions";

function App() {
  const counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increment());
  };

  const onDecrease = () => {
    dispatch(decrement());
  };
  return (
    <div className="App" style={{ margin: "50px" }}>
      <h1>Counter</h1>
      <button onClick={onIncrease}>+</button>
      <p>{counter}</p>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default App;
