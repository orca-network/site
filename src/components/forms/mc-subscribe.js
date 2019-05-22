import React, { Component } from "react"
import superagent from "superagent"

export default class Subscribe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      fname: "",
      lname: "",
      zip: "",
    }
  }

  submitForm = () => {
    console.log("amworking to submit a form")
    superagent.post("https://localhost:2000/subscribe")
    .send(this.state)
    .catch(error =>{
        return 'There was an error with the form';
    });
  }

  render() {
    return (
      <div id="mc_embed_signup">
        <form
          onSubmit={() => this.submitForm()}
          action="https://gmail.us20.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="f02e0e165f9380ffceaa5c058" />
          <input type="hidden" name="id" value="e7d3644021" />
          {/*           
          method="post" id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form" class="validate" target="_blank"
          novalidate > */}
          <fieldset>
            <legend>Subscribe</legend>
            <div id="mc_embed_signup_scroll">
              <div class="indicates-required">
                <span class="asterisk">*</span> indicates required
              </div>
              <div class="mc-field-group">
                <label htmlfor="MERGE0">Email Address * </label>

                <input
                  type="email"
                  autoCapitalize="off"
                  autocorrect="off"
                  name="MERGE0"
                  id="MERGE0"
                  size="25"
                  value={this.state.email}
                  onChange={e => {
                    this.setState({ email: e.target.value })
                  }}
                />
              </div>

              <div class="mc-field-group">
                <label htmlfor="MERGE1">First Name</label>
                <input
                  type="text"
                  name="MERGE1"
                  id="MERGE1"
                  size="25"
                  value=""
                  value={this.state.fname}
                  onChange={e => {
                    this.setState({ fname: e.target.value })
                  }}
                />
              </div>
              <div class="mc-field-group">
                <label htmlfor="MERGE2">Last Name</label>
                <div class="field-group">
                  <input
                    type="text"
                    name="MERGE2"
                    id="MERGE2"
                    size="25"
                    value={this.state.lname}
                    onChange={e => {
                      this.setState({ lname: e.target.value })
                    }}
                  />
                </div>
              </div>
              <div class="mc-field-group">
                <label htmlfor="MERGE3">
                  Zip Code <span class="req asterisk">*</span>
                </label>
                <div class="field-group">
                  <input
                    type="text"
                    name="MERGE3"
                    id="MERGE3"
                    size="25"
                    value={this.state.zip}
                    onChange={e => {
                      this.setState({ zip: e.target.value })
                    }}
                  />
                </div>
              </div>
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                />
                <div
                  class="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                />
              </div>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <div
                style={{
                  position: "absolute",
                  left: "-5000px",
                  ariaHidden: "true",
                }}
              >
                <input
                  type="text"
                  name="b_f02e0e165f9380ffceaa5c058_e7d3644021"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}
