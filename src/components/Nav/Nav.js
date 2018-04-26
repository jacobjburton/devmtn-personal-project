import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav()
{
    return (
        <div className="navBar">
            <img src={require('../../files/img/swimming-icon-23788.png')} alt={"logo"} className="logo"/>
            <div className="navLinks">
                <Link to='/home' className="linkText">Home</Link>
                <Link to='/events' className="linkText">Events</Link>
                <Link to='/timestandards' className="linkText">Time Standards</Link>
                <Link to='/addevent' className="linkText">Add Event</Link>
                <Link to='/logout' className="linkText">
                    Signout
                </Link>
            </div>
        </div>
    )
}