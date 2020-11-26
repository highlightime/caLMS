import {withRouter} from 'react-router-dom'

function LogoutButton({logout, history}){
    const handleClick = () =>{
        alert("Logout Success!")
        logout()
        history.push('/')
    }

    return(
        <li class="nav-item">
         <h1><a className="navbar-brand" onClick={handleClick} style={{cursor:"pointer"}}>
             <span style={{color:'#fff'}}>Logout</span>
         </a></h1>
        </li>
    )
}

export default withRouter(LogoutButton)