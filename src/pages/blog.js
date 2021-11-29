import * as React from "react";
import HeaderComp from "../components/header";
import BlogMainPageComp from "../templates/blog-main";
import FooterComp from "../components/footer";
import {Link, graphql} from "gatsby"

// markup
const BlogPage = ({data}) => {
  return(
    <div className="fix-center">
        {/* Header component  starts*/}
        <HeaderComp/>
        {/* Header component ends*/}

        <div className="blog-container">
      {data?.allContentfulBlog?.edges?.map(({ node }, i) => (
        <div className="blog-card">
          <img src={node?.featuredImage?.file?.url}/>
          <h4>{node?.blogTitle}</h4>
          <Link to="#">Read more</Link>
        </div>
      ))}
      </div>

        {/* Footer component starts */}
        <FooterComp />
       {/* Footer component ends */}
    </div>
  )};

export default BlogPage

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