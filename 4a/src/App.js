import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Gaurav V");
  const [address, setAddress] = useState("RGA Tech Park, Bangalore");
  const [company, setCompany] = useState("Unisys");
  const setDetails = (name, addr, company) => {
    setName(name);
    setAddress(addr);
    setCompany(company);
  };
  return (
    <div>
    <h1>Employee Details</h1>
    
    <h3>Name :- </h3> {name}
    <h3>Address :- </h3> {address}
    <h3>Company :- </h3> {company}
    <br /><br /><br />
    <button style={{marginRight:"0.5rem"}} onClick={() => window.location.reload()}>Refresh</button>
    <button onClick={() => setDetails("Aravind Shreyas","Manyata Tech Park","ZS Associates")}>Change Employee</button>
  </div>
  );
}

export default App;
