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

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route>
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
