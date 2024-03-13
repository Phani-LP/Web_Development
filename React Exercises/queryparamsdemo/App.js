import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <center>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Profile' element={<Profile/>}/>
          </Routes>
        </BrowserRouter>
      </center>
    </div>
  );
}
export default App;