import React, { Component } from "react";
import axios from "axios";

export default class Followers extends Component {
  state = {
    followers: [],
  };

  //Second create the place that will handle the fetching of the data
  componentDidMount() {
    axios
      .get("https://api.github.com/users/BigKnell/followers")
      .then((res) => this.setState({ followers: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <div className="followers">
          {this.state.followers.map((follower) => (
            <div className="follower">
              <img
                width="200px"
                src={follower.avatar_url}
                alt={follower.login}
              />
              <h5> {follower.login} </h5>
              {follower.location && (
                <address>Location: {follower.location} </address>
              )}
            </div>
          ))}
        </div>
      </>
    ); // end of return
  } // end of render
}
