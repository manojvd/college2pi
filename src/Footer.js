import './Footer.css'
// import React from 'react'

import React, { Component } from 'react'

class Subfooter extends Component {
    render() {
        var SubfooterStyle = {
            color:"#333",
            display:"inline-block",
            padding:"5%",
            paddingTop:"0",
            margin:"5%"
        }
        return (
            <div style={SubfooterStyle}>
                {this.props.children}
            </div>
        )
    }
}


function Footer() {
    return (
        <div className="Footer">
            <h3 style={{textAlign:"left", paddingLeft:"15%"}}><b style={{ fontFamily: "sans-serif" }}>College2<span><i>π</i></span></b></h3>
            <div>
                <Subfooter><a href="/">Home</a><br/><a href="/about">about</a><br/><a href="/Contactus">Contact us</a><br/><a href="/Feedback">Feedback</a><br/><a href="/Authors">Authors</a></Subfooter>
                <Subfooter><a href="/Engineering">Engineering</a><br/><a href="/MBA">MBA</a><br/><a href="/Medical">Medical</a><br/><a href="/BSc">BSc</a><br/><a href="/News">News</a></Subfooter>
                <Subfooter><br/><a href="/Signup"> Register </a><br/><br/><br/><br/></Subfooter>
            </div>
            <p>College2pi.com is a one-stop-solution making course and college selection easy for students looking to pursue undergraduate (UG) and postgraduate (PG) courses in India.</p>
            <p>Trade Marks belong to the respective owners. Copyright © 2021 College edge India Ltd. All rights reserved</p>
        </div>
    )
}

export default Footer
