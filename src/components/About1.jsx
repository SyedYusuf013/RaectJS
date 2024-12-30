import React from "react";

const About = ({ name, age, sal }) => {

    const showAlert = () => {
        alert("This is a alert")
    }


  return (
    <div onClick={showAlert}>
      <h1>Name:- {name}</h1>
      <h2>Age:- {age}</h2>

      {/* this will show only given person details with && operater */}
      {/* {sal && <p>Salary:- {sal}</p>}  */}

      {/* this will show only given person details with Ternary Operator(Conditional Rendering) */}
      {sal ? <p>Salary:- {sal}</p> : ""}
    </div>
  );
};

export default About;
