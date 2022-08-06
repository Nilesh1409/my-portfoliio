import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "../button/Button";
// import img from ""

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  console.log("repo", repo);

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id}>
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
              {/* <ProjectLanguages
                className="repo-languages"
                logos={repo.languages}
              /> */}
            </p>
          </div>

          {repo.name === "SPOTIFY CLONE" ? (
            <div className="project-div-main">
              <div className="project-div-img">
                <img src="/vrbo.gif" />
              </div>
              <div className="projectCartButton">
                <div className="portfolio-repo-btn-div">
                  <Button
                    text="LIVE"
                    newTab={true}
                    href={"https://vrbo-clone.netlify.app/"}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
                <div className="portfolio-repo-btn-div">
                  <Button
                    text="GITHUB"
                    newTab={true}
                    href={"https://github.com/shiva-69/Vrbo.git"}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
              </div>

              <div className="project-div-discription">
                <h3>
                  Here you can book amazing rentals for vacation with your
                  friends or family.
                </h3>
                <h3>Features</h3>
                <ul>
                  <li>Sign Up | Login | Auto Login </li>
                  <li>Google Sign Up Integration</li>
                  <li>Home Page | Search Results Page | Checkout | Payment</li>
                  <li>Trip Boards - To check trips you have booked</li>
                </ul>
                <h3>Areas of responsibility</h3>
                <ul>
                  <li>Developed Login Page | Sign-up Page</li>
                  <li>Intrigated Google Auth - for sign up</li>
                  <li>Created Home Page with all functionalities</li>
                  <li>Created API for search suggestion</li>
                  <li>Developed backend for Web App</li>
                </ul>
                <h3>
                  A collaborative project build by 4 Developers within 7 days
                </h3>
              </div>
            </div>
          ) : repo.name === "SPARESHUB CLONE      " ? (
            <div className="project-div-main">
              <div className="project-div-img">
                <img src="/modsens.gif" />
              </div>

              <div className="projectCartButton">
                <div className="portfolio-repo-btn-div">
                  <Button
                    text="LIVE"
                    newTab={true}
                    href={"https://modesens-web-app-clone.netlify.app/"}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
                <div className="portfolio-repo-btn-div">
                  <Button
                    text="GITHUB"
                    newTab={true}
                    href={"https://github.com/akashkmt/ModeSens-Clone.git"}
                    theme={theme}
                    className="portfolio-repo-btn"
                  />
                </div>
              </div>

              <div className="project-div-discription">
                <h3>
                  Here you can buy Fashion, Beauty, and Personal Essentials
                  Products.
                </h3>
                <h3>Features</h3>
                <ul>
                  <li>
                    Sign Up | Login | All Products Page - with Filter & Sort
                    Functionality
                  </li>
                  <li>
                    Single Product Page (dynamic) along with Add To Cart Feature
                  </li>
                  <li>Checkout | Payment Page along with all Functionality</li>
                  <li>
                    Third-Party Integration for checking Card Details for Pay
                    Via Card
                  </li>
                </ul>
                <h3>Areas of responsibility</h3>
                <ul>
                  <li>
                    Developed Footer | Navbar (dynamic) with variety of options
                    to choose{" "}
                  </li>
                  <li>Created Single Product Page (dynamic) along</li>
                  <li>Added Add To Cart Feature useing Redux</li>
                  <li>Developed backend for Web App </li>
                </ul>
                <h3>
                  A collaborative project build by 5 Developers within 7 days
                </h3>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <p className="repo-description" style={{ color: theme.text }}>
          {repo.description}
        </p>
        <div className="repo-details">
          <p
            className="repo-creation-date subTitle"
            style={{ color: theme.secondaryText }}
          ></p>
        </div>
      </Fade>
    </div>
  );
}
