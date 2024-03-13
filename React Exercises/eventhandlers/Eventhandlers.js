import React, { useState } from "react";

const Eventhandlers = () => {
  const [name, setName] = useState("Arjun");
  const [colorchanger, setcolorChanger] = useState("white");

  const nameChanger = (e) => {
    setName(e.target.value);
  };

  const [data, setData] = useState({
    ename: "",
    eemail: "",
    epassword: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    alert(`Data Sent Successfullt.`)
  };
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Name: <input onChange={nameChanger} id='personName' type="text" />
      <br />
      Hello {name}! This is for onChange event.
      <br />
      <br />
      <button
        style={{ color: colorchanger, backgroundColor: "black" }}
        onClick={() => {
          if (colorchanger === "white") {
            setcolorChanger("lightgreen");
          } else if (colorchanger === "lightgreen") {
            setcolorChanger("white");
          }
        }}
      >
        Click Me for Onclick Event
      </button>
      <br />
      <br />
      <form onSubmit={submitHandler}>
        Name: <input type="text" name="ename" onChange={changeHandler} />
        <br />
        Email: <input type="email" name="eemail" onChange={changeHandler} />
        <br />
        Password:<input type="password" name="epassword" onChange={changeHandler} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Eventhandlers;