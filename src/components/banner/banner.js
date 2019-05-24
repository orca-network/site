import React from 'react'

const banner=(props)=> {
  return (
    <section className="hero-1">
      <div>
          <h2>{props.title}</h2>
          <p>{props.sub}</p>
          <div>{props.children}</div>
      </div>
    </section>
  )
}

export default banner;
