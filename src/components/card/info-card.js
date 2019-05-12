import React from "react"
import { When } from "../conditional/conditional.js"

const InfoCard = props => {
  return (
    <div className="card info">
      <When condition={props.img}>
        <img src={props.img} />
      </When>
      <div>
        <h4> {props.title} </h4>
        <h5>{props.subtitle}</h5>
        <p>
          {props.location}, {props.date}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default InfoCard
