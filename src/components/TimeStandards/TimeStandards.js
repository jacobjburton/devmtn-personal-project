import React from 'react';
import "./TimeStandards.css";
import sectionals from '../../files/timestandards/sectionals.png';
import allAmerica from '../../files/timestandards/allamerica.png';
import futures from '../../files/timestandards/futures.png';
import p66Nats from '../../files/timestandards/p66nats.png';
import winterJrNats from '../../files/timestandards/winterjrnats.png';
import winterSrNats from '../../files/timestandards/wintersrnats.png';

export default class TimeStandards extends React.Component
{
    constructor()
    {
        super();

        this.state = 
        {
            table: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(file)
    {
        this.setState({ table: file });
    }

    render()
    {
        let tableDisplay = this.state.table !== '' ? <img src={this.state.table} alt="table" className="tableIMG"/> : ""
        return (
            <div>
                <div className="displayPDF">
                    <select className="selectbar" onChange={((e) => this.handleChange(e.target.value))}>
                        <option hidden>Select Time Standard Table</option>
                        <option value={sectionals}>2018 Sectionals</option>
                        <option value={allAmerica}>2017-18 All-America</option>
                        <option value={futures}>2018 Futures</option>
                        <option value={p66Nats}>2018 Phillips 66 Nationals</option>
                        <option value={winterJrNats}>2018 Winter Jr. Nationals</option>
                        <option value={winterSrNats}>2018 Winter Sr. Nationals</option>
                    </select>
                    
                    
                </div>
                <div className="tablebox">
                    {tableDisplay}
                </div>
            </div>
        )
    }
}