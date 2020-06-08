import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'

const App = ()=> {
  return (
    <Router>
    <Fragment>
      <header className="App-header">
        <Navbar/>
        <div class="container">
          <Switch>
            <Route exact path="/" component={Home}>Home</Route>
            <Route exact path="/about" component={About}>About</Route>
          </Switch>
        </div>
        <h1>Hello World</h1>
      </header>
    </Fragment>
    </Router>
  );
}

export default App;
