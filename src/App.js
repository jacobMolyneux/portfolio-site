import "./App.css";
import { Navbar } from "./components/navbar";
import { HomePage } from "./components/home";
import {Routes, Route} from 'react-router-dom'
import { ProjectsPage } from "./components/projectPage";
import { Resume } from "./components/resumePage.js";
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="bg-dark">
      
        <Nav>
          <Nav.Item>
            <Nav.Link href = '/'>Home</Nav.Link>
          </Nav.Item>
            <Nav.Item>
              <Nav.Link href ='/resume'>Resume</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href = '/projects'>Projects</Nav.Link>
            </Nav.Item>
        </Nav>
        <Routes>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/resume' element = {<Resume/>}/>
          <Route path = '/projects' element = {<ProjectsPage/>}/>
        </Routes>
        </div>
)}

export default App;
