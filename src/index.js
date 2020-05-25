import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/register';

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/Login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

