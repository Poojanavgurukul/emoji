import React from 'react';
import data from '../Components/EmojiList.json';
import logo from '../Components/logo.jpg';

class Searchbar extends React.Component{
    constructor(){
        super();
        this.state={
            search:""
        }
    }

    onSearchange=(e)=>{
        this.setState({search:e.target.value})
    }
    render(){
        const {search} = this.state;
        const filtermethod = data.filter(movie=>{
            return movie.title.toLowerCase().indexOf(search.toLowerCase()) !==-1 || movie.keywords.toLowerCase().indexOf(search.toLocaleLowerCase()) !==-1
        })
        return(
            <div className="main">
                <div className="nav">
                <img src={logo} alt="im" className="logo"></img>
                <h1>Emoji Search</h1>
                </div>
                <input  value ={this.state.search} onChange={this.onSearchange} placeholder="Type here......." className="inp"></input>
                <ul>
                    {
                        filtermethod.slice(0,20).map(function(movie,index){
                            return<div key={index}> 
                            <span style={{fontSize:"20px"}}>{movie.title}</span>
                            <span style={{fontSize:"20px"}}>{movie.symbol}</span> 
                            </div>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Searchbar;