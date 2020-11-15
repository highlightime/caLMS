import React, {Component, useState} from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import DrawCalendar from './Component/drawCalendar';
import Calendar from './Component/fullCalendar';
import LoginPage from './Component/loginPage';
import Profile from './Component/profile';
import {signIn} from './Component/auth';
import AuthRoute from './Component/authRoute';
import HomePage from './Component/home'
import LogoutButton from './Component/logoutButton';

function App(){
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ID, password}) => setUser(signIn({ID, password}));
  const logout = () => setUser(null);

  return(
    <Router>
      <nav class="navbar navbar-expand-md navbar-dark bg-info">
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav align-self-end" id="nav">
            <li class="nav-item">
              <Link to="/">
                <a herf class="navbar-brand">Home</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/drawCalendar">
               <a href class="navbar-brand">draw</a>
              </Link>
            </li>
            <li class="nav-item">
              {authenticated ? (
                <LogoutButton logout={logout}/>
                ) : (
                  <Link to="/login">
                    <a href class="navbar-brand">Login</a>
                  </Link>
                )
                }
            </li>
            <li class="nav-item">
              <Link to="/calendar">
                <a href class="navbar-brand">Calendar</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/profile">
                <a href class="navbar-brand">Profile</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <main>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/drawCalendar" component={DrawCalendar}/>
          
          <Route
            path="/login"
            render={props=>(
              <LoginPage authenticated={authenticated} login={login} {...props}/>
            )}/>
          <AuthRoute
            authenticated={authenticated}
            path="/calendar"
            render={props=><Calendar/>}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props=><Profile user={user} {...props}/>}
          />
        </Switch>
      </main>
    </Router>
  )
}

export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/