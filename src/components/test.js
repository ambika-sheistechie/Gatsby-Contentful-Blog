import React from "react"
import { graphql } from "gatsby"

const TestComp = ({ data }) => <script>console.log({JSON.stringify(data)})</script>

export const query = graphql`
  {
    allContentfulBlog {
      group(field: contentful_id) {
        nodes {
          blogTitle
          featuredImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`

export default TestComp