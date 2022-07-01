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
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" />
                  ) : logo.skillName === "CSS3" ? (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/768px-CSS3_logo.svg.png" />
                  ) : logo.skillName === "ReactJS" ? (
                    <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" />
                  ) : logo.skillName === "ReactJS" ? (
                    <img src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png" />
                  ) : logo.skillName === "Redux" ? (
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbDn-_kLAcnntK415Ct2XJd9Uz6A74Qs6LkvcoS6GNWzG-0zsBTBS1EUTYdJXXJn-JnqQ&usqp=CAU" />
                  ) : logo.skillName === "NodeJS" ? (
                    <img src="https://icon-library.com/images/node-js-icon/node-js-icon-6.jpg" />
                  ) : logo.skillName === "Express" ? (
                    <img src="https://vladmrnv.gallerycdn.vsassets.io/extensions/vladmrnv/expresssnippet/0.2.4/1528939685286/Microsoft.VisualStudio.Services.Icons.Default" />
                  ) : logo.skillName === "MongoDB" ? (
                    <img src="https://dwglogo.com/wp-content/uploads/2017/12/MongoDB_logo_01.png" />
                  ) : logo.skillName === "Github" ? (
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                  ) : logo.skillName === "DS & Algo" ? (
                    <img src="https://w7.pngwing.com/pngs/125/653/png-transparent-algorithms-data-structures-programs-data-structures-and-algorithms-introduction-to-algorithms-others-miscellaneous-angle-computer-science.png" />
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
