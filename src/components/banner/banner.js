import React from 'react'

const banner=(props)=> {
  return (
    <section className="hero-1">
      <div>
          <h2>{props.title}</h2>
          <h3>{props.sub}</h3>
          <div>{props.children}</div>
      </div>
    </section>
  )
}

export default banner;
