import React, {Component, useState} from 'react';
import {Link, Route, Switch, BrowserRouter as Router} from 'react-router-dom';
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
      <header>
        <Link to="/">
          <button>home</button>
        </Link>
        <Link to="/drawCalendar">
          <button>draw</button>
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout}/>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )
      }
        <Link to="/calendar">
          <button>calendar</button>
        </Link>
        <Link to="/profile">
          <button>profile</button>
        </Link>
      </header>
      <hr/>
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