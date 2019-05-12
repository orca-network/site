import React from "react"

//card component that takes in props
//sets up card container with bulma, renders title
// renders the children contained in the card (img and or content)

const Card = props => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title"> {title} </p>
        <p> {children} </p>
      </div>
    </div>
  )
}

export default Card;