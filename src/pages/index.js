import React, { Component } from "react"
import Layout from "../components/layout"
const coverImage = 'https://static.wixstatic.com/media/760f65_dcdcd5d2c81647fe96b526352ee9f4a9~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_90/760f65_dcdcd5d2c81647fe96b526352ee9f4a9~mv2.webp';

export default class index extends Component {
  render() {
    return (
      <Layout>
        <>
          {/* <h1 className="title has-text-weight-bold is-size-2 has-text-centered">
          The Orca Network
        </h1>{" "} */}
        <section class="section has-background-primary" >
        <figure class="image" style={{margin: "0px 2em", height:"450px", overflow: "hidden", border: "4px solid white"}}>
          <img src={coverImage}/>
        </figure>
        </section>
 

          <section class="hero is-primary" >
            <div class="hero-body">
              <div class="container has-text-centered">
                  <h1 class="title">The Orca Network</h1>
                <h2 class="subtitle">Non profit for whale and orca research in the pacific northwest.</h2>
              </div>
            </div>
          </section>
          <section class="section has-text-centered">
          <a class="button is-warning is-normal is-rounded">Support Orca Network</a>
          </section>
        </>
      </Layout>
    )
  }
}
