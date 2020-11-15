import {withRouter} from 'react-router-dom'

function LogoutButton({logout, history}){
    const handleClick = () =>{
        alert('Logout Success!');
        logout()
        history.push('/')
    }

    return(
        <li class="nav-item">
         <a href class="navbar-brand" onClick={handleClick} style={{cursor:"pointer"}}>Logout</a>
        </li>
    )

    //return <button onClick = {handleClick} class="btn btn-outline-info">Logout</button>
}

export default withRouter(LogoutButton)