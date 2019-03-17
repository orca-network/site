import React, { Component } from "react"
import Layout from "../components/layout"
import coverImage from '../images/cover-image.png';
import {Link} from 'gatsby'
import ImgCard from "../components/img-card.js";

export default class index extends Component {
  render() {
    return (
      <Layout>
        <>
          {/* <h1 className="title has-text-weight-bold is-size-2 has-text-centered">
          The Orca Network
        </h1>{" "} */}
        <section class="section" style={{padding: "0em"}} >
        <figure class="image" >
          <img src={coverImage} />
        </figure>
        </section>
          <section class="hero is-primary" >
            <div class="hero-body">
              <div class="container has-text-centered">
                  <h1 class="title">Orca Network</h1>
                <h2 class="subtitle">Non profit for whale and orca research in the pacific northwest.</h2>
                <a to="/" class="button is-warning is-normal is-rounded">Support Orca Network</a>

              </div>
            </div>
          </section>
  
          <section class="section columns is-mobile">

            <div class="column is-one-quarter">
              <ImgCard img="assets/marine-stranding-network.png"/>
            </div>
            <div class="column is-one-quarter">
              <ImgCard img="assets/network-logo.png"/>
            </div>
            <div class="column is-one-quarter">
              <ImgCard img="assets/whale-center-logo.jpg"/>
            </div>
            <div class="column is-one-quarter">
              <ImgCard img="assets/whale-sighting-logo.png"/>
            </div>
          </section>

        </>
      </Layout>
    )
  }
}
