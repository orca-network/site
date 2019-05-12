import React from "react"

//make a card that can render a larger, more feature card content for any of the sub-main pages
const featureCard = props => {
  return (
    <div class="card" style={{margin: "2rem"}}>
      <div class="card-header">
        <div class="card-header-title">{props.title}</div>
      </div>
      <div class="columns">
      <div class="card-image column is-one-third">
        <figure class="image" style={{ margin: "1rem" }}>
          <img src={props.image} style={{width: "300px"}}/>
        </figure>
      </div>
      <div class="card-content">{props.content}</div>
      </div>
    </div>
  )
}

export default featureCard;