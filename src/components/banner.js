import React from 'react'

const banner=(props)=> {
  return (
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h2 class="title">{props.title}</h2>
        </div>
      </div>
    </section>
  )
}

export default banner;
