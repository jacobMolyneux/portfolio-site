import "./App.css";
import { Navbar } from "./components/navbar";
import HomePage from "./components/home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ProjectsPage } from "./components/projectPage";
import { Resume } from "./components/resumePage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav id="navContainer">
            <ul id="listContainer">
              <li className="navLink">
                <Link to="/">Home</Link>
              </li>
              <li className="navLink">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="navLink">
                <Link to="/projects">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
