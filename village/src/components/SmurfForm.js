import React, { Component } from 'react';
import axios from 'axios';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    console.log("adding smurf");  

    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }

    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
      console.log('Post repsonse', response);
      
        this.setState({
          smurfs: response.data,
          name: '',
          age: '',
          height: ''
        });
        this.props.history.push('/');
      })
      .catch(error => console.log(error));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit" onClick={this.addSmurf}>
            Add to our teeny village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
