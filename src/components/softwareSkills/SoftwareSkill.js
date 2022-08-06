import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          {/* <ul className="dev-icons"> */}
          {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
          {this.props.logos.map((logo) => {
            console.log(logo.skillName);
            // if(logo.skillName === "HTML5"){
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <div className="skill-logo-div">
                  {logo.skillName === "HTML5" ? (
                    <img src="/htlm.png" />
                  ) : logo.skillName === "CSS3" ? (
                    <img src="/css.png" />
                  ) : logo.skillName === "JavaScript" ? (
                    <img src="js.png" />
                  ) : logo.skillName === "ReactJS" ? (
                    <img src="react.png" />
                  ) : logo.skillName === "Redux" ? (
                    <img src="redux.png" />
                  ) : logo.skillName === "NodeJS" ? (
                    <img src="nodejs.png" />
                  ) : logo.skillName === "Express" ? (
                    <img src="express.png" />
                  ) : logo.skillName === "MongoDB" ? (
                    <img src="mongo.png" />
                  ) : logo.skillName === "Github" ? (
                    <img src="github.png" />
                  ) : logo.skillName === "DS & Algo" ? (
                    <img src="dsa.png" />
                  ) : logo.skillName === "Git" ? (
                    <img src="git.png" />
                  ) : logo.skillName === "Postman" ? (
                    <img src="postman.png" />
                  ) : logo.skillName === "Chakra UI" ? (
                    <img src="chakra.png" />
                  ) : logo.skillName === "Material UI" ? (
                    <img src="mui.png" />
                  ) : (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
                  )}

                  <div className="skill-logo-name">{logo.skillName}</div>
                </div>
              </OverlayTrigger>
            );
            //  }
            //  else{
            //  <div></div>
            //  }
          })}
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
