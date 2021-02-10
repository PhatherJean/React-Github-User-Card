import React from "react";
import axios from "axios";
class User extends React.Component {
  state = {
    details: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/PhatherJean")
      .then((res) => this.setState({ details: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return this.state.isLoading ? (
      <h2>Page is loading...</h2>
    ) : (
      <>
        <div className="user">
          <img
            src={this.state.details.avatar_url}
            alt={this.state.details.name}
          />
          <h1>{this.state.details.name}</h1>
          <h3> Tag: {this.state.details.login} </h3>
          <a href={this.state.details.html_url}>
            {" "}
            <strong>My Github</strong>{" "}
          </a>
          <p>
            <strong>Location:</strong> {this.state.details.location}{" "}
          </p>
        </div>
      </>
    ); // end of return
  } // end of render
}

export default User;
