// import { useReducer, useState } from "react";
// import counterReducer from "./counterReducer";

import useCounterStore from "./store";

const Counter = () => {
  // const [value, setValue] = useState(0);

  // const [value, dispatch] = useReducer(counterReducer, 0);

  const { counter1, increment1, reset1, counter2, increment2, reset2 } =
    useCounterStore();

  return (
    <>
      <div>
        {/* Counter ({value}) */}
        Counter1 ({counter1})
        <button
          // onClick={() => setValue(value + 1)}
          // onClick={() => dispatch({ type: "INCREMENT" })}
          onClick={() => increment1()}
          className="btn btn-primary mx-1"
        >
          Increment1
        </button>
        <button
          // onClick={() => setValue(0)}
          // onClick={() => dispatch({ type: "RESET" })}
          onClick={() => reset1()}
          className="btn btn-primary mx-1"
        >
          Reset1
        </button>
      </div>

      <div className="divider"></div>

      <div>
        {/* Counter ({value}) */}
        Counter2 ({counter2})
        <button
          // onClick={() => setValue(value + 1)}
          // onClick={() => dispatch({ type: "INCREMENT" })}
          onClick={() => increment2()}
          className="btn btn-primary mx-1"
        >
          Increment2
        </button>
        <button
          // onClick={() => setValue(0)}
          // onClick={() => dispatch({ type: "RESET" })}
          onClick={() => reset2()}
          className="btn btn-primary mx-1"
        >
          Reset2
        </button>
      </div>
    </>
  );
};

export default Counter;
