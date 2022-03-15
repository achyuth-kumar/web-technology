import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Announcements from "./Pages/Announcements";
import Contact from "./Pages/Contact";
import Registrations from "./Pages/Registrations";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/announcements" component={Announcements} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/registrations" component={Registrations} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
