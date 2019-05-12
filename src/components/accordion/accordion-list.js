import React from "react"
import { Link, withPrefix } from "gatsby"

import "./accordion.scss"

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "react-accessible-accordion"

//list component that takes in props passed down by index
//maps through props and gets the front matter to render each thing as a card

const AccordionList = props => {
  console.log(props.posts[0].node.excerpt)
  return (
    <div class="accordion-container">
      <Accordion>
        {props.posts.map(edge => {
          const {
            node: {
              rawMarkdownBody,
              frontmatter: { path, title, image },
            },
          } = edge
          return (
            <AccordionItem>
              <AccordionItemTitle>
                <h3 className="u-position-relative">
                  {title}
                  <div className="accordion__arrow" role="presentation" />
                </h3>
              </AccordionItemTitle>
              <AccordionItemBody>
                <div>
                  <p style={{overflow: "hidden", padding: "1em"}}>
                    {" "}
                    {image ?
                    <img
                      src={image}
                      style={{ display: "inline !important", float: "left", width:"300px", paddingRight: "1em" }}
                    /> :
                    null
                    }
                    {rawMarkdownBody}
                  </p>
                </div>
              </AccordionItemBody>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default AccordionList
