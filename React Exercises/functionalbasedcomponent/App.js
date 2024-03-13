import { useState } from "react";
import Test from './Test'
function App() {
  const [names, setName] = useState({
    name1: "Sumanth",
    name2: "Jassu",
    name3: "Yashu",
  });

  const namechanger=()=>{
    setName({
      ...names,name2:'Jaswanth',name3:'Yashodar'
    });
  }

  return <div className="App">
    <Test name1={names.name1} name2={names.name2} namee3={names.name3}/>
    <button onClick={namechanger}>Click Me</button>
    </div>
}

export default App;






// import { useState } from "react";

// function App() {
//   const [names, setName] = useState({
//     name1: "Sumanth",
//     name2: "Jassu",
//     name3: "Yashu",
//   });

//   return <div className="App">My Friends names are {names.name1}, {names.name2}, {names.name3}.</div>;
// }

// export default App;

// import { useState } from "react";

// function App() {

//   const [name, setName] = useState('Sumanth')

//   return (
//     <div className="App">
//       My Friend Name is {name}.
//     </div>
//   );
// }

// export default App;
