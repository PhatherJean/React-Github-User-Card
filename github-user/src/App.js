import React from "react";
import axios from "axios";

// class Followers extends React.Component {
//   render() {
//     return (
//       <div className="follower">
//         {this.props.lists.map((list) => console.log(list))}
//         Name: {this.props.name}
//         Github Name: {this.props.handle}
//       </div>
//     );
//   }
// }
class App extends React.Component {
  state = {
    image: "",
    name: "",
    handle: "",
    location: "",
    followers: "",
    lists: [],
  };

  componentDidMountS() {
    axios
      .get(`https://api.github.com/users/Bigknell`)
      .then((res) => {
        //console.log("Data that you requested:", res);
        this.setState({
          image: res.data.avatar_url,
          name: res.data.name,
          handle: res.data.login,
          location: res.data.location,
          followers: res.data.followers,
          list: res.data.followers_url,
        });
      })
      .catch((err) => {
        console.log("Houston we got a problem", err);
      });
  }

  handleChange = (e) => {
    this.setState({
      handle: e.target.value,
    });
  };
  handleClick = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.handle}`)
      .then((res) => {
        console.log("Data that you requested:", res);
        this.setState({
          image: res.data.avatar_url,
          name: res.data.name,
          handle: res.data.login,
          location: res.data.location,
          followers: res.data.followers,
          list: res.data.followers_url,
        });
      })
      .catch((err) => {
        console.log("Houston we got a problem", err);
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input
              placeholder="Enter your User Id"
              onChange={this.handleChange}
              type="text"
            />
            <button onClick={this.handleClick}>Get Your Details</button>
          </form>
          <h1> Hello I am {this.state.name}</h1>
          <h3>Github Tag: {this.state.handle} </h3>
          <img width="400" src={this.state.image} alt="selfie" />
        </header>
        <div>
          <p>
            <strong>Representing:</strong>
            {this.state.location}
          </p>
          <p>
            Currently has about<strong> {this.state.followers} </strong>
            followers at this point in time:
          </p>

          <ul>
            {this.state.lists.map((list) => {
              <li>
                <img
                  width="100"
                  key={list.id}
                  src={list.avatar_url}
                  alt={list.login}
                />
                Github Name:{list.login}
              </li>;
            })}
          </ul>
        </div>
        {/* <Followers
          lists={this.state.lists}
          name={this.state.name}
          handle={this.state.handle}
        /> */}
      </div>
    );
  }
}

export default App;
