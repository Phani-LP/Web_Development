import React, { useState } from "react";
import "./App.css";
import Data from "./states.json";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      Search:{" "}
      <input
        type="text"
        placeholder="Search your state"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <br />
      <br />
      {Data.filter(items =>items.state.toLocaleLowerCase().includes(search.toLowerCase())).map((items) => {
        return (
          <div
            style={{
              padding: "10px",
              margin: "5px auto",
              height: "100%",
              width: "400px",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            {items.state}
          </div>
        );
      })}
    </div>
  );
}

export default App;
