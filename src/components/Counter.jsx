import React, { useState } from "react";

const Counter = () => {
  // pre-defined functions in react.js is called hooks
  // pre-defined functions in Java is called library
  // pre-defined functions in Node.js is called module
  // pre-defined functions in cpp is called header-file
  //   let counter = 0;

  const [counter, setCounter] = useState(0);

  const increase = () => {
    // counter++;
    // console.log(counter);

    setCounter(counter+1)
  };

  const decrease = () => {
    // counter--;
    setCounter(counter-1)
    console.log(counter);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default Counter;
