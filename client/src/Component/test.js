import React, {useState, useEffect} from 'react';

export default function Test(){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001',{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        })
            .then(res=>{
                console.log(res);
                console.log(typeof(res));
                return res.json();
            })
            .then(res => console.log(res));
    });

    return(
        <div>{data}</div>
    )
}