
import React, { Component } from 'react'
import './Searchbar.css';
class Searchbar extends Component {
    state={

    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" className="Searchbar" onChange={this.isrch} placeholder="Search" ></input>
                    <button className="Searchbarbutton"/>
                </form>
            </div>
        )
    }
}


export default Searchbar
