import React from 'react';
import data from '../Components/EmojiList.json';

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
            <div>
                <h1>Emoji Search</h1>
                <input  value ={this.state.search} onChange={this.onSearchange}></input>
                <ul>
                    {
                        filtermethod.slice(0,20).map(function(movie,index){
                            return<div key={index}> 
                            <span>{movie.title}</span>
                            <span>{movie.symbol}</span> 
                            </div>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Searchbar;