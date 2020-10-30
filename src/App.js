import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import ProjectsPage from './Components/ProjectsPage/ProjectsPage';
import Footer from './Components/Footer/Footer';
import ContactPage from './Components/ContactPage/ContactPage';
import BlogPage from './Components/BlogPage/BlogPage';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/projects">
              <ProjectsPage></ProjectsPage>
            </Route>
            <Route exact path="/blog">
              <BlogPage></BlogPage>
            </Route>
            <Route exact path="/contact">
              <ContactPage></ContactPage>
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
