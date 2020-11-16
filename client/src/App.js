import React, {Component, useEffect, useState} from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import DrawCalendar from './Component/drawCalendar';
import Calendar from './Component/fullCalendar';
import LoginPage from './Component/loginPage';
import Profile from './Component/profile';
import {signIn} from './Component/auth';
import AuthRoute from './Component/authRoute';
import HomePage from './Component/home'
import LogoutButton from './Component/logoutButton';

import Test from './Component/test';

function App(){
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ID, password}) => setUser(signIn({ID, password}));
  const logout = () => setUser(null);

  return(
    //<Test></Test>
    
    <Router>
      <nav className="navbar navbar-expand-md navbar-dark bg-info">
        <Link to="/">
          <a href="#" className="navbar-brand">
          <img src={'https://user-images.githubusercontent.com/49060014/99229264-1eca1200-2831-11eb-9363-c4a718e2ffb4.png'} width={100 + 'px'}/></a>
        </Link>
        <div className="collapse navbar-collapse justify-content-end fadeIn" id="navbarNavDropdown">
          <ul className="navbar-nav align-self-end" id="nav">
          <li className="nav-item">
              {authenticated ? (
                <LogoutButton logout={logout}/>
                ) : (
                  <Link to="/login">
                    <a href="#" className="navbar-brand"><img src={'https://user-images.githubusercontent.com/49060014/99229239-1a9df480-2831-11eb-8612-20e3c1968c59.png'} width={80+'px'}/></a>
                  </Link>
                )
                }
            </li>
            <li className="nav-item">
              <Link to="/drawCalendar">
               <a className="navbar-brand"><img src={'https://user-images.githubusercontent.com/49060014/99229232-18d43100-2831-11eb-932b-3a292d45bc1e.png'} width={80+'px'}/></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/calendar">
                <a className="navbar-brand"><img src={"https://user-images.githubusercontent.com/49060014/99228651-41a7f680-2830-11eb-86f7-f870b67f97ce.png"} width={120+'px'}/></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">
                <a className="navbar-brand"><img src={'https://user-images.githubusercontent.com/49060014/99229247-1bcf2180-2831-11eb-9755-89a1f337f96e.png'} width={90+'px'}/></a>
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