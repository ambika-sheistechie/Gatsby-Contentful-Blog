import * as React from "react";
import HeaderComp from "../components/header"
import FooterComp from "../components/footer";
import TestComp from "../components/test";
import style from "../css/style.css";
import {Link} from "gatsby"

// markup
const AboutPage = () => {
  return (
    <div className="fix-center">
      <HeaderComp/>
      <h1>This is About us Page</h1>
      <Link to="/">Go to Home Page</Link>
      <FooterComp/>
    </div>
  );
}

export default AboutPage
