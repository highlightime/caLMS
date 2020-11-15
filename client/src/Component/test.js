import Data from "../data/data.json";
import React from 'react';

/*
const array = Data.map((item, index)=>{
    return(
        <li key={index}>
            {item.title} {item.start} {item.end}
        </li>
    )
})
*/

var index = 0;

class Test extends React.Component{
    render(){
        return(
            <div className="date">
            </div>
        )
    }
}

export default Test;