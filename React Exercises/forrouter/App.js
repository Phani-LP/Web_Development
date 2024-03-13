
// there are two ways to send the data between pages - path params & query params


import React from "react";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App"><center>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dashboard/:name" element={<Dashboard />} />
          <Route path="/About/:name" element={<About />} />
        </Routes>
      </BrowserRouter>
      </center>
      </div>
  );
};

export default App;