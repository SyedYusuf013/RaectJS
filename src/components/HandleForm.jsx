import React, { useState } from "react";

const HandleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setflag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your form has been submitted...");

    setflag(true);
  };

  return (
    <div className="pt-2 pl-2">
      <h1 className="font-semibold">Form Handling</h1>
      <br />

      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-black"
        />
        <br />
        <br />
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-black"
        />
        <br />
        <br />
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black"
        />
        <br />
        <br />
        <input type="submit" className="pl-1 pr-1 text-black bg-white" />
      </form>
      {flag && (
        <div className="pt-2">
          <h2>Name: {name}</h2>
          <h2>Email: {email}</h2>
          <h2>Password: {password}</h2>
        </div>
      )}
    </div>
  );
};

export default HandleForm;
