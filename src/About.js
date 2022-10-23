import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div className="About">
                <h1>About</h1>
                <p>College2pi.com is a one-stop-solution making course and college selection easy for students looking to pursue undergraduate (UG) and postgraduate (PG) courses in India.</p> 
                <br/><br/>
                <div style={{textAlign:"left", paddingLeft:"10%"}}>
                <h4>Developed by </h4>
                <ul>
                    <li>Manoj Kumar</li> 
                    <li>Kamal Sab</li>
                    <li>Meghana</li>
                    <li>Aravind</li>
                </ul> 
                </div>    
            </div>
        )
    }
}
