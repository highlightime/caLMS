import Data from "../data/data.json";
import React, {useState} from 'react';

// ip : 3.34.58.93

class Test extends React.Component{
    render(){

        return(
        <form>
            <input id="ID" placeholder="ID"></input>
            <input id="password" placeholder="PassWord"></input>
            <button type="submit">Login</button>
        </form>
        )
    }
}

export default Test;