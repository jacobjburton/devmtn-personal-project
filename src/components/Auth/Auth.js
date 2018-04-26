import React from 'react';
import './Auth.css';


function Auth ()
{
    
        return (
            <div className="loginScreen">
                <div className="navBar">
                    <img src={require('../../files/img/swimming-icon-23788.png')} alt={"logo"} className="logo"/>
                    <a href={process.env.REACT_APP_LOGIN} className="loginButton">
                        Login
                    </a>                
                </div>
                
            </div>
        )
}   

export default Auth; 