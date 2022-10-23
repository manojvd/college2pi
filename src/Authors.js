import React, { Component } from 'react'
export default class Authors extends Component {
    render() {
        var authorsStyle={
            display: "block",
            margin: "auto",
            padding: "3%",
            backgroundColor: "rgb(135, 163, 179)",
            height: "600px",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle"     
        }
        return (
            <div style={authorsStyle}>
                <h1>Authors</h1>
                <div style={{textAlign:"left", paddingLeft:"10%"}}>
                <h4>Developed by </h4>
                <ul>
                    <li>Manoj Kumar<br/><p>SRN:PES1UG20CS662</p></li> 
                    <li>Kamal Sab<br/><p>SRN:PES1UG20CS653</p></li>
                    <li>Meghana<br/><p>SRN:PES1UG20CS663</p></li>
                    <li>Aravind<br/><p>SRN:PES1UG20CS649</p></li>
                </ul> 
                </div>   
            </div>
        )
    }
}