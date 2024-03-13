import React from 'react';
import Dashboard from './Dashboard';
import About from './About';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App=()=>{
  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/About'  element={<About/>} />
          </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App;



// import Ig from "./Ig";
// const App=()=>{
  
//   const links = ['https://i.ibb.co/FW1K8by/Jackie-Chan.jpg','https://i.ibb.co/FW1K8by/Jackie-Chan.jpg','https://i.ibb.co/FW1K8by/Jackie-Chan.jpg','https://i.ibb.co/FW1K8by/Jackie-Chan.jpg']
  
//   return (
//     <div className="App" style={{display:"flex", flexWrap:'wrap' }}>
//       {links.map((item, index)=><Ig src={item} key={index} />)}
//     </div>
//   );
// }

// export default App;
