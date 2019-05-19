import React, { Component } from "react"

export default class Subscribe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      fname: null,
      lname: null,
      zip: null
    }
  }
  render() {
    return (
      <div id="mc_embed_signup">
        <form
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
                <label for="MERGE0">Email Address * </label>

                <input
                  type="email"
                  autocapitalize="off"
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
              <label for="MERGE1">First Name</label>
              <div class="field-group">
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
                <label for="MERGE2">Last Name</label>
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
                <label for="MERGE3">
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
                  tabindex="-1"
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