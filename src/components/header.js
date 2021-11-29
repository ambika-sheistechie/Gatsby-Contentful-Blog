import * as React from "react"; 
import logo from "../images/icon.png";
import "../css/style.css";
import {Link} from "gatsby";

const HeaderComp = () =>{
    return(
        <div className="fix-center">
            <nav>
                <div className="brand-logo">
                    <img src={logo}/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        );
    }

export default HeaderComp;