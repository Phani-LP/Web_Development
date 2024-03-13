import React from "react";
import img from "./img";
const App = () => {
  const arr = [
    "https://i.ibb.co/zxS4DmN/Awesome-2.jpg",
    "https://i.ibb.co/zxS4DmN/Awesome-2.jpg",
    "https://i.ibb.co/zxS4DmN/Awesome-2.jpg",
  ];
  return (
    <div className="App">
      <center>
        {arr.map((item, index) => (
          <img src={item} key={index} />
        ))}
      </center>
    </div>
  );
};
export default App;
