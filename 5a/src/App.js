import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <input type="text" value={name} placeholder="Enter Name" onChange={(e) => {setName(e.target.value)}} />
     {name && <h1>Name : {name}</h1>}
    </div>
  );
}

export default App;
