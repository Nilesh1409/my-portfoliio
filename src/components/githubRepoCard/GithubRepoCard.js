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
              <ProjectLanguages
                className="repo-languages"
                logos={repo.languages}
              />
            </p>
          </div>

          {repo.name === "SPOTIFY CLONE" ? (
            <div className="project-div-main">
              <div className="project-div-img">
                <img src="/ezgif.com-gif-maker.gif" />
              </div>
              <button
                className="live-button"
                onClick={() =>
                  openRepoinNewTab("https://spotify-webapp-clone.netlify.app/")
                }
              >
                LIVE
              </button>
              <button
                className="live-button"
                onClick={() =>
                  openRepoinNewTab(
                    "https://github.com/deepaksahu3698/Spotify_webapp_Clone/tree/Nilesh"
                  )
                }
              >
                GITHUB
              </button>
              <div className="project-div-discription">
                <h3>
                  Here you can listen to all latest songs, Podcasts, of all
                  kinds of genres.
                </h3>
                <h3>Features</h3>
                <ul>
                  <li>Sign Up | Login</li>
                  <li>
                    Landing Page | Home Page (dynamic) | Search Page | Playlist
                    Page
                  </li>
                  <li>Add song to Playlist | Music Player </li>
                </ul>
                <h3>Areas of responsibility</h3>
                <ul>
                  <li>Developed Landing Page</li>
                  <li>Created Home Page with all functionalities </li>
                  <li>Created SeeAll Page and Navbar</li>
                  <li>Created Music Player with all functionalities </li>
                  <li>Developed backend for Web App </li>
                </ul>
                <h3>
                  A collaborative project build by 5 Developers within 7 days
                </h3>
              </div>
            </div>
          ) : repo.name === "SPARESHUB CLONE      " ? (
            <div className="project-div-main">
              <div className="project-div-img">
                <img src="/ezgif.com-gif-maker (1).gif" />
              </div>
              <button
                className="live-button"
                onClick={() =>
                  openRepoinNewTab("https://spotify-webapp-clone.netlify.app/")
                }
              >
                LIVE
              </button>
              <button
                className="live-button"
                onClick={() =>
                  openRepoinNewTab(
                    "https://github.com/mdtabish803116/SpareshubWeakProject/tree/nilesh"
                  )
                }
              >
                Github
              </button>
              <div className="project-div-discription">
                <h3>
                  Here you can order all kinds of spares of bike and cars.
                </h3>
                <h3>Features</h3>
                <ul>
                  <li>Sign Up | Login</li>
                  <li>Landing Page | Home Page | Cart Page | Payment Page </li>
                  <li>Add to Cart </li>
                </ul>
                <h3>Areas of responsibility</h3>
                <ul>
                  <li>Developed Sign Up page using local storage</li>
                  <li>Created Login Page </li>
                  <li>Created About section</li>
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
