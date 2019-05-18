import React from "react"

export default function facebook() {
  return (
    <iframe className="facebook"
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOrcaNetwork&tabs=timeline&width=300&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    width="100%"  
    style={{
      dataWidth:"100%",
      height:"350px",
      border:"none",
      overflow:"hidden",
      scrolling:"no",
      frameborder:"0",
      allowTransparency:"true",
      allow:"encrypted-media"}}
    />
  )
}
