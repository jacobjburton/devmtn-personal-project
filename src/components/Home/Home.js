import React, { Component } from 'react';

export default class Home extends Component
{
    render()
    {
        return (
            <div>
                Home
                <a href="http://localhost:4000/logout">
                    <button>Logout</button>
                </a>
            </div>
        )
    }
}