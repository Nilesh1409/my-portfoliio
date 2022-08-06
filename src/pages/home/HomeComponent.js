import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Projects from "../projects/Projects";
import Contact from "../contact/ContactComponent";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../../components/seoHeader/SeoHeader";
import { Link } from "react-scroll";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Home extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";

    return (
      <div>
        <Fade top duration={1000} distance="20px">
          <SeoHeader />

          <div>
            <header className="header">
              <NavLink to={link} tag={Link} className="logo">
                <span style={{ color: theme.text }}> &lt;</span>
                <span className="logo-name" style={{ color: theme.text }}>
                  {greeting.logo_name}
                </span>
                <span style={{ color: theme.text }}>/&gt;</span>
              </NavLink>
              <input className="menu-btn" type="checkbox" id="menu-btn" />

              <ul className="menu" style={{ backgroundColor: theme.body }}>
                <li>
                  {/* <span
                  // to="/home"
                  // tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <a href=".projects-main" >Home</a>
                  
                </span> */}
                  <Link
                    activeClass="active"
                    to="greeting"
                    spy={true}
                    smooth={true}
                  >
                    About me
                  </Link>
                </li>
                <li>
                  {/* <a href="#skills" > */}
                  {/* <NavLink
                  to=".sklils"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                > */}
                  {/* Skills */}
                  {/* </NavLink> */}
                  {/* </a> */}
                  {/* add activeClass="active"*/}
                  <Link to="skills" spy={true} smooth={true}>
                    Skills
                  </Link>
                </li>

                <li>
                  {/* <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink> */}
                  <Link to="projects" spy={true}>
                    Projects
                  </Link>
                </li>

                <li>
                  {/* <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink> */}
                  <Link to="contacts" spy={true}>
                    Contact Me
                  </Link>
                </li>
              </ul>
              {/* <button className="new-theam-button" onClick={demofun} > Change Theam</button> */}
            </header>
          </div>
        </Fade>
        {/* <Header theme={this.props.theme} /> */}
        <Greeting theme={this.props.theme} />
        {/* <div id="skills" > */}

        <Skills theme={this.props.theme} />

        {/* </div> */}
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
        <Projects theme={this.props.theme} />
        <Contact theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
