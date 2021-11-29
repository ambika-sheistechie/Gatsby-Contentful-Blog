import * as React from "react";
import {Link, graphql} from "gatsby"

// markup
const BlogMainPageComp = ({data}) => {
  return(
    <div className="fix-center">
      <div className="blog-container">
      {data?.allContentfulBlog?.edges?.map(({ node }, i) => (
        <div className="blog-card">
          <img src={node?.featuredImage?.file?.url}/>
          <h4>{node?.blogTitle}</h4>
        </div>
      ))}
      </div>
    </div>
  )};

export default BlogMainPageComp

export const query = graphql`
{
  allContentfulBlog {
    edges {
      node{
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