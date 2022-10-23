import React, { Component } from 'react'

import Newsitem from './Newsitem'

import './News.css'
export default class News extends Component {
        articles =[  ]
        constructor() {
            super();
            console.log("from constructor"); 
            this.state ={
                articles : this.articles,
                loading :false
            }
        }
        async componentDidMount(){
            console.log("cdm");
            // let url ="https://newsapi.org/v2/top-headlines?country=england&category=business&apiKey=e4aa5de6087c4f5ba1ee378dd4d91ab5"
            let url ="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e4aa5de6087c4f5ba1ee378dd4d91ab5"
            // let url ="https://newsapi.org/v2/top-headlines?country=uk&apiKey=e4aa5de6087c4f5ba1ee378dd4d91ab5"    
            // let url = "apiKey=e4aa5de6087c4f5ba1ee378dd4d91ab5"
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({articles : parsedData.articles});
        }
        render() {
        return (
            <>
            <div className = "container my-2 newsContainer">
                <div className="row ">
                {this.state.articles.map((elements)=>(
                    <div className="col-md-2" key={elements.url}> 
                    <Newsitem  title ={elements.title.slice(0,50)} discrip={elements.description.slice(0,100)} imageUrl={elements.urlToImage} link ={elements.url}/>
                    </div>    
                ))}
                </div>
            </div>
            </>
        )
    }
}
