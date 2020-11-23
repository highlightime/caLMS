import React, {Component, useEffect, useState} from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';

import Calendar from './Component/fullCalendar';
import LoginPage from './Component/loginPage';
import Profile from './Component/profile';
import {signIn} from './Component/auth';
import AuthRoute from './Component/authRoute';
import HomePage from './Component/home'
import LogoutButton from './Component/logoutButton';
import AddEvent from './Component/addEvent';

function App(){
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ID, password}) => setUser(signIn({ID, password}));
  const logout = () => setUser(null);

  return(    
    <Router>
      <nav className="navbar navbar-expand-md" style={{background:'#72CDFC'}}>
       <ul className="nav justify-content-center">
         <li className='nav-item'>
          <Link to="/">
            <a href="#" className="nav-link">
            <img src={'https://user-images.githubusercontent.com/49060014/99343070-86836a00-28d0-11eb-9749-ea659d51788c.jpg'} width={100 + 'px'}/></a>
          </Link>
         </li>
        </ul>
        <div className="collapse navbar-collapse justify-content-end fadeIn" id="navbarNavDropdown">
          <ul className="navbar-nav align-self-end" id="nav">
          <li className="nav-item">
              {authenticated ? (
                <LogoutButton logout={logout}/>
                ) : (
                  <Link to="/login">
                    <h1><a className="navbar-brand"><span style={{color:'#fff'}}>Login</span></a></h1>
                  </Link> ) }
            </li>
            <li className="nav-item">
              {authenticated ? (
                  <Link to="/addEvent">
                    <h1><a className="navbar-brand"><span style={{color:'#fff'}}>Add Event</span></a></h1>
                  </Link>
                ) : (
                  <></> )  }
            </li>
            <li className="nav-item">
              {authenticated ? (
                  <Link to="/calendar">
                    <h1><a className="navbar-brand"><span style={{color:'#fff'}}>Calendar</span></a></h1>
                  </Link>
                ) : (
                  <></> ) }
            </li>
            <li className="nav-item">
              {authenticated ? (
                  <Link to="/profile">
                    <h1><a className="navbar-brand"><span style={{color:'#fff'}}>Profile</span></a></h1>
                  </Link>
                ) : (
                  <></> ) }
            </li>
          </ul>
         </div>
        <div className='footer'></div>
      </nav>
      
      <main>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          
          <Route
            path="/login"
            render={props=>(
              <LoginPage authenticated={authenticated} login={login} {...props}/>
            )}/>
          <AuthRoute
            authenticated={authenticated}
            path="/addEvent"
            render={props=><AddEvent/>}
          />
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