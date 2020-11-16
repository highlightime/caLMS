import '../css/login.css';
import userLogo from '../icon/logo.png';
import {Redirect} from 'react-router-dom';
import React, { useState } from 'react';

function LoginPage({authenticated, login, location}){
    const [ID, setID] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () => {
        try{
            login({ID, password})
        }catch(e){
            alert("Login Failed")
            setID("")
            setPassword("")
        }
    }

    const {from} = location.state || {from:{pathname:"/"}}
    if(authenticated) return <Redirect to={from}/>

    return(
        <div className="wrapper fadeIn">
            <div id="formContent">
                <div className="fadeIn first">
                    <img src={userLogo} id='icon'/>
                </div>
                <form>
                    <input type="text" onChange={({target:{value}}) => setID(value)} id="ID" className="fadeIn second" name="login" placeholder="ID"/>
                    <input type="text" onChange={({target:{value}}) => setPassword(value)} id="password" className="fadeIn third" name="login" placeholder="password"/>
                    <input type="button" onClick={handleClick} className="fadeIn fourth" value="Log In"/>
                </form>
                <div id="formFooter">
                    <a className="underlineHover" href="http://lms.knu.ac.kr" target="_blank">Forgot Password?</a>
                </div>
            </div>
        
        </div>
    )
}

export default LoginPage;