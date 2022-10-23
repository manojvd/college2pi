import React, { Component } from 'react'
import './College.css'

export default class College extends Component {
    constructor(){
        super()
        this.state={logo:" ",name:" ",ratings:" ",nirf:" ",fees:" ",place:" ",course:" ",link:"/"}
        this.updatestate=this.updatestate.bind(this)
    }
    render() {
        return (
            <div className="College">
                <Logo logo={this.state.logo}/>
                <Info name={this.state.name} ratings={this.state.ratings} nirf={this.state.nirf} fees={this.state.fees} place={this.state.place} course={this.state.course} weblink={this.state.weblink}/>
                <button onClick={this.updatestate}>&gt;</button>
            </div>
        );
    }
    updatestate =()=>{
        console.log("in updatestate")
        // let url="http://localhost:3000"
        // let data =  fetch(url);
        // let parsedData =  data.json()
        // console.log(parsedData);
        // //this.setState(parsedData[0]);
        var c = this.props.a
        var a=[{logo:"https://getmyuni.azureedge.net/college-image/small/pes-university-pesu-bangalore.jpg",name:"PES University", ratings:"4.5",nirf:"75",fees:"3.5L",place:"Banglore",course:"Btech,Mtech,PHD,BSc,BBA,MBA",weblink:"https://pes.edu/}"},{logo:"https://th.bing.com/th/id/R.0c9c4f4143fe826d8ae0754582a559b5?rik=bsQF1qbvQQL%2byg&riu=http%3a%2f%2fimage3.mouthshut.com%2fimages%2fimagesp%2f925084237s.jpg&ehk=Y%2bLPexHys1paHLtsqpkgOIDPaxh5C7wpA3OsLsmZpF0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",name:"MIT", ratings:"4",nirf:"7",fees:"4L",place:"Manglore",course:"Btech,Mtech,PHD",weblink:"https://pes.edu/"},{logo:"https://th.bing.com/th/id/R.c8d6d75221608a698b634aa6c283a853?rik=6XV6ls8XJtUX4g&riu=http%3a%2f%2f2011.igem.org%2fwiki%2fimages%2f4%2f47%2fIITM_Color_Logo.JPG&ehk=l%2fKGMiFxwu86W7mVjdRVMh9Xz9YG0k4h3tVbMCOVusI%3d&risl=&pid=ImgRaw&r=0",name:"IIT Madras", ratings:"5",nirf:"2",fees:"2.5L",place:"Chennai",course:"Btech,Mtech,PHD,BSc",weblink:"https://www.iitm.ac.in/403?r=2"},{logo:"https://th.bing.com/th/id/R.3e5943a65b9d41b8669b066eb36e4c10?rik=dzLSUVyNuBG2%2fw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-WCxAPJ3tY-M%2fTzuG22IKxPI%2fAAAAAAAAB10%2fry6zFHWk74o%2fs1600%2fSurthkal_logo.png&ehk=SSiddmwGtFxDMxLdCXEfeMuqZIU9zM7%2b3TvsI4qyW8M%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",name:"NITSTKL", ratings:"4.8",nirf:"8",fees:"2L",place:"Surathkal",course:"Btech,Mtech,PHD,BSc",weblink:"https://www.nitk.ac.in/"},{logo:"https://th.bing.com/th/id/R.24f3c0f6b621bcdb8d8c603885405db1?rik=atfP9kGaah636A&riu=http%3a%2f%2fwww.freelogovectors.net%2fwp-content%2fuploads%2f2019%2f07%2fvitlogo.jpg&ehk=z0nHUp%2bAYlg%2b%2b8963WNHVrgDSZKOvvH8bRLoJuVfU7c%3d&risl=&pid=ImgRaw&r=0",name:"VIT", ratings:"4",nirf:"70",fees:"5L",place:"Vellore",course:"Btech,Mtech,PHD,BSc",weblink:"https://vit.ac.in/"}]
        this.setState(a[c-1]) 
    }
}

class Logo extends Component {
    render() {
        return (
            <div className="Logo">
                <img src={this.props.logo} alt="logo" width="100%" height="100%"/>
            </div>
        )
    }
}

class Info extends Component {
    render() {
        return (
            <div className="Info">
                <Name name={this.props.name}/>
                <Details fees={this.props.fees} ratings={this.props.ratings} nirf={this.props.nirf} place={this.props.place} course={this.props.course} weblink={this.props.weblink} />
            </div>
        )
    }
}


class Name extends Component {  
    render() {
        return (
            <div className="Name">
                {this.props.name}
            </div>
        )
    }       
}


class Details extends Component {
    render() {
        return (
            <div className="Details">
                <table >
                <tr>
                    <td>ratings: {this.props.ratings}</td>
                    <td>nirf ranking: {this.props.nirf}</td>
                    <td>fees: {this.props.fees}</td>
                </tr>
                </table>
                <table >
                <tr> 
                    <td>Courses: {this.props.course}</td> 
                    <td>place: {this.props.place}</td> 
                </tr>
                </table>
                <a href={this.props.weblink} target="_blank">link</a>
            </div>
        )
    }
}

