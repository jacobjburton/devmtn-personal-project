import React from 'react';
import './Auth.css';

export default function Auth()
{
    return (
        <div className="loginScreen">
            <div className="navBar">
                <img src={require('../../files/img/swimming-icon-23788.png')} alt={"logo"} className="logo"/>
            </div>
            <div>
                <a href={process.env.REACT_APP_LOGIN}>
                    <button className="loginButton">LOGIN</button>
                </a>
            </div>
        </div>
    )
}