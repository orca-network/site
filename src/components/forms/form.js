import React, { Component } from "react"

export default class form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: null,
      description: null,
    }
  }

  handleFormSubmit = e => {
    e.preventDefault()
    console.log("submitted", this.state)
    // fetch('http://example.com',{
    //     method: "POST",
    //     body: JSON.stringify(userData),
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //   }).then(response => {
    //     response.json().then(data =>{
    //       console.log("Successful" + data);
    //     })
    // })
    // .catch(error => console.error('unsuccessful post'));
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
              type="text"
              value={this.state.location}
              onChange={this.handleLocation}
            />
          </label>
          <label>
            Description:
            <textarea
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
