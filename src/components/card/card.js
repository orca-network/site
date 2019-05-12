import React from "react"

const Card = props => {
  return (
    <div className="card">
      <img src={props.img} />
      <div>
        <h4> {props.title} </h4>
        <p> {props.text} </p>
      </div>
    </div>
  )
}

export default Card;
