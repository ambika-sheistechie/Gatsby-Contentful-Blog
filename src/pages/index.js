import * as React from "react";
import HeaderComp from "../components/header";
import FooterComp from "../components/footer";
import {Link, graphql} from "gatsby"

// markup
const IndexPage = ({data}) => {
  return(
    <body>
      {/* Header component  starts*/}
      <HeaderComp/>
       {/* Header component ends*/}

       <section className="landing-section home-landing-bg-img">
        <div className="fix-center">
          <div>
            <span></span>
            <h1></h1>
            <p><strong></strong></p>
          </div>
          <div>
            <img src="../images/landing image-sheistechie.png" alt="Landing section she is techie image"/>
          </div>
          <h1></h1>
        </div>
       </section>
      
       {/* Footer component starts */}
          <FooterComp />
       {/* Footer component ends */}
       </body>
  )};

export default IndexPage

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