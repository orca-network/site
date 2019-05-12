import React from "react"

//make a card that can render a larger, more feature card content for any of the sub-main pages
const featureCard = props => {
  return (
    <div className="feature-card">
      <img src={props.image} />
      <article>
        <h2 className="clip-text-maybe">{props.title}</h2>
        <p>{props.content}</p>
      </article>
    </div>
  )
}

export default featureCard
