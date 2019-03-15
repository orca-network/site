import React from "react"
import { Link, withPrefix } from "gatsby"

import "./styles/accordion.scss"

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
    <div>
      <Accordion>
        {props.posts.map(edge => {
          const {
            node: {
              excerpt,
              frontmatter: { path, title },
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
                <div class="container">
                  <img src="https://via.placeholder.com/150" />
                  {excerpt}
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
