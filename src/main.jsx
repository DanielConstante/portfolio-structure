import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './NavBar.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Projects from './Projects/Project.jsx';
import Resume from './Resume/Resume.jsx';
import ContactMe from './ContactMe/ContactMe.jsx';
import Blog from './Blog/Blog.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-me" element={<ContactMe />} />
    </Routes>
  </Router>,
)
