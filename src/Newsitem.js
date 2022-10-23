import React, { Component } from 'react'


export default class newsitem extends Component {
    render() {

        var {title , discrip,imageUrl,link} = this.props;
        return (
        <div className="my-3 ">
                <div className="card ">
  <img src={imageUrl} alt='hello' height="200px"/>
  <div className="card-body " style={{backgroundColor:"silver", color:"black"}}>
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{discrip}...</p>
    <a href={link} target="_blank" className="btn btn-sm btn-primary">Readmore</a>
  </div>
</div>
            </div>
        )
    }
}
