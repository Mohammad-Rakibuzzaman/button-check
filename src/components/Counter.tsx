import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
