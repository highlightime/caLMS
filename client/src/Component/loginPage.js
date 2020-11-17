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
                    <img src={'https://user-images.githubusercontent.com/49060014/99343411-3062f680-28d1-11eb-8d4c-59c4b04d4e3e.png'} id='icon'/>
                </div>
                <form>
                    <br/>
                    <input type="text" onChange={({target:{value}}) => setID(value)} id="ID" className="fadeIn second" name="login" placeholder="아이디" style={{fontSize:25+'px'}}/>
                    <input type="text" onChange={({target:{value}}) => setPassword(value)} id="password" className="fadeIn third" name="login" placeholder="비밀번호" style={{fontSize:25+'px'}}/>
                    
                    <input type="button" onClick={handleClick} className="fadeIn fourth" value="로그인" style={{fontSize:25+'px'}}/>
                </form>
                <div id="formFooter">
                    <a className="underlineHover" href="http://lms.knu.ac.kr" target="_blank">Forgot Password?</a>
                </div>
            </div>
        
        </div>
    )
}

export default LoginPage;