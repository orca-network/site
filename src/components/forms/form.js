import React, { Component } from "react"
import axios from 'axios'

export default class form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      description: null,
    }
  }

  handleFormSubmit = e => {
    // e.preventDefault();
    // let url = `https://script.google.com/macros/s/AKfycbyNLPGNDB-bO5kxpYf3CnsYQLCHANjhVVRn_AsnX0YO-MZ9n-k/exec?location=Seattle`;

    // axios.get(url, JSON.stringify(this.state))
    // .then(data =>{
    //     console.log(data);
    // })
    // .catch(error => console.log('err ', error));

        e.preventDefault();
    let url = "http://localhost:2000/sheets";

    axios.post(url, this.state)
    .then(data =>{
        console.log(data);
    })
    .catch(error => console.log('err ', error));

    this.handleClearForm()
  }

  handleClearForm = () => {
    this.setState({ location: "", description: "" })
    console.log(this.state)
  }

  handleDescription = e => {
    this.setState({ description: e.target.value })
    e.preventDefault()
  }

  handleLocation = e => {
    this.setState({ location: e.target.value })
    e.preventDefault()
    // console.log('state', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <fieldset>
          <legend>Report a Sighting</legend>
          <label>
            Location:
            <input
                name="location"
              type="text"
              value={this.state.location}
              onChange={this.handleLocation}
            />
          </label>
          <label>
            Description:
            <textarea
            name="location"
            type="text-area"
              value={this.state.description}
              onChange={this.handleDescription}
            />
          </label>

          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    )
  }
}
