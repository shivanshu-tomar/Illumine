import React from "react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  var increseClickHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <div className="d-flex ">
        <div>{count}</div>
        <div>
          <button className="btn btn-primary" onClick={increseClickHandler}>
            increse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
