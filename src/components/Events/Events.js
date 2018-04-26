import React, { Component } from 'react';
import { connect } from 'react-redux';

class Events extends Component
{
    render()
    {
        return (
            <div>
                Events
            </div>
        )
    }
}

export default connect(null)(Events);