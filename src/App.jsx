import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const HandleIncrement = () => {
      setCount(count + 1);
  };

  const HandleDEcrement = () => {
      setCount(count - 1);
  };

  const incBtnDisabled= count ===20
  const decBtnDisabled= count ===0

  const getText=()=>{
    if(decBtnDisabled){
      return 'counter in not started'
    }
    else if (count < 5){
      return 'counter is less than 5'
    }

    return 'second text'
  }


  return (
    <>
      <div className="main">
     <div className="inner-container">
     <h5 className="result">{count}</h5>
        <div className="btns">
          <button disabled={incBtnDisabled} onClick={HandleIncrement}>Increment</button>
          <button disabled={decBtnDisabled} onClick={HandleDEcrement}>Decrement</button>
          <button
          disabled={decBtnDisabled}
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>

      <div>{getText()}</div>

        </div>
     </div>
      </div>

    </>
  );
}

export default App;
