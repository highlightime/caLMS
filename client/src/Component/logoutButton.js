import {withRouter} from 'react-router-dom'

function LogoutButton({logout, history}){
    const handleClick = () =>{
        alert('Logout Success!');
        logout()
        history.push('/')
    }

    return(
        <li class="nav-item">
         <a href class="navbar-brand" onClick={handleClick} style={{cursor:"pointer"}}>
             <img src="https://user-images.githubusercontent.com/49060014/99229255-1d004e80-2831-11eb-87cd-29f1adbb4d6e.png" width={95 + 'px'}/>
         </a>
        </li>
    )
}

export default withRouter(LogoutButton)