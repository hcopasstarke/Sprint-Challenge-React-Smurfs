import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      // axios.get is asking for the information from the server
      .then(response => {
        console.log(response);
        // response is the response we get back from the server
        // set our state with the new data
        this.setState({
          smurfs: response.data,
          name: "",
          age: "",
          height: ""
        });
      })
      .catch(error => console.log(error));
    }


  render() {
    return (
      <div className="App">
        <ul className="navbar">
          <li>
            <NavLink exact to="/" activeClassName="activeNavButton">
              See Our Entire Smurf Village
            </NavLink>
          </li>
          <li>
            <NavLink to="/smurfs" activeClassName="activeNavButton">
              Add Here to Help Us Grow!
            </NavLink>
          </li>
        </ul>
        <Route exact path = "/" render = {props => <Smurfs { ...props } smurfs = {this.state.smurfs} />} />
        <Route path = "/smurfs" component = { SmurfForm } />
      </div>
    );
  }
}

export default App;
