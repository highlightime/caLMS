import React from 'react';
import {Redirect, Route } from 'react-router-dom';

function AuthRoute({authenticated, component:Component, render, ...rest}){
    return(
        <Route
            {...rest}
            render={(props)=>
                authenticated ? (
                    render ?(
                        render(props)
                    ) : (
                        <Component {...props} />
                    )
                ) : (
                    <Redirect
                        to = {{pathname:"/login", state:{from : props.location}}}
                    />
                )
            }
        />
    )
}

export default AuthRoute;