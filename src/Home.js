import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Authors from './Authors'
import College from './College'
import './Home.css'
import Login from './Login'
import News from './News'
import Searchbar from './Searchbar'
import Signup from './Signup'
// import Subnav from './Subnav'

class Naav extends React.Component {
  state = {

  }
  render() {
    return (
      <>
        <div id="navlist" >
          <b style={{ fontFamily: "sans-serif", color:"red" }}>College2<span><i>π</i></span></b>
          <a href="/">Home</a>
          <a href="/MBA">MBA</a>
          <a href="/Engineering">Engineering</a>
          <a href="/Medical">Medical</a>
          <a href="/BSc">BSc</a>
          <a href="/News">News</a>
          <a href="/About">About</a>
          <a href="/Signup" style={{ float: 'right' }}>signup</a>
        </div>
      </>
    )
  }
}
function Home() {
  return (
    <>
      <div className="header">
        <img src="https://www.medtravelers.com/contentassets/fb080b6c12a8470da569fbe30094e802/new-grad.jpg" alt="logo" width="100%" height="200px" />
        
      </div>
      <Naav />
      {/* <Searchbar /> */}
      <br />
      {/* <News/> */}
      <br />
      <College a="1" /><br />
      <College a="2" /><br />
      <College a="3" /><br />
      <College a="4" /><br />
      <College a="5" /><br />

    </>
  )
}
class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/MBA">
          <Naav />
          {/* <Subnav /> */}
          <College a="1" /><br />
          <College a="2" /><br />
          <College a="3" /><br />
          <College a="4" /><br />
          <College a="5" /><br />

        </Route>
        <Route exact path="/Engineering">
          <Naav />
          {/* <Subnav /> */}
          <College a="1" /><br />
          <College a="2" /><br />
          <College a="3" /><br />
          <College a="4" /><br />
          <College a="5" /><br />
        </Route>
        <Route exact path="/Medical">
          <Naav />
          {/* <Subnav /> */}
          <College a="1" /><br />
          <College a="2" /><br />
          <College a="3" /><br />
          <College a="4" /><br />
          <College a="5" /><br />
        </Route>
        <Route exact path="/BSc">
          <Naav />
          {/* <Subnav /> */}
          <College a="1" /><br />
          <College a="2" /><br />
          <College a="3" /><br />
          <College a="4" /><br />
          <College a="5" /><br />
        </Route>
        <Route exact path="/About">
          <Naav />
          <About />
        </Route>
        <Route exact path="/Authors">
          <Naav />
          <Authors />
        </Route>
        <Route exact path="/News">
          <Naav />
          <News />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Login">
          <Naav />
          <Login />
        </Route>
        <Route exact path="/Signup">
          <Naav />
          <Signup />
        </Route>
      </Router>
    )
  }
}

export default App;
