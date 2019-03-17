import React from "react"

const ImgCard = props => {
  return (
    <div class="card">
      <div class="card-image ">
      <figure class="image is-square">
      <img src={props.img} />

      </figure>
      </div>
    </div>
  )
}

export default ImgCard
