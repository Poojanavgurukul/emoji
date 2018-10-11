import React from "react";
import data from "../Components/EmojiList.json";
import logo from "../Components/logo.jpg";
import { Icon } from "antd";

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  onSearchange = e => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { search } = this.state;
    const filtermethod = data.filter(movie => {
      return (
        movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        movie.keywords.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
      );
    });
    return (
      <div className="main">
        <div className="nav">
          <img src={logo} alt="im" className="logo" />
          <h1>Emoji Search</h1>
        </div>
        <div className="inpbox">
          <input
            value={this.state.search}
            onChange={this.onSearchange}
            placeholder="Type here......."
            className="inp"
            style={{ marginTop: "100px" }}
          />
          <Icon type="search" />
        </div>
        <ul>
          {filtermethod.slice(0, 20).map(function(movie, index) {
            return (
              <div key={index} className="inpcontent">
                <span style={{ fontSize: "30px" }} className="content">
                  {movie.symbol}
                </span>
                <span style={{ fontSize: "20px" }} className="content">
                  {movie.title}
                </span>
              </div>
            );
          })}{" "}
        </ul>
      </div>
    );
  }
}

export default Searchbar;
