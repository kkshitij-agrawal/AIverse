import React from "react";
import "./App.css";
import headline from "./Assets/justonemoreproject.svg";
import blogsCover from "./Assets/blogscover.svg";
import appsCover from "./Assets/appBg.svg";
import arrowIcon from "./Assets/arrow.svg";
import xtreakCover from "./Assets/xtreak1.svg";
import newsCover from "./Assets/newscover.svg";
import blogsSpiral from "./Assets/blogspiral.svg";
import wipSticker from "./Assets/wip.svg";
import astronautSticker from "./Assets/astro-trans.png";

import { Tweet } from "react-twitter-widgets";

export default function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item big-item">
          <div className="openItem">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="contentItem">
            <p>upskilling; riding the AI spaceship✨ </p>
            <img src={headline} alt="" />

            <p>
              on a mission to unbundle the current processes, design and build
              for the future 🚀
            </p>
          </div>
        </div>

        <div className="grid-item apps-item coverimg">
          <div className="openItem">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="contentItem">
            {/* <img id="appGrid" src={projectsGrid} alt="" /> */}
            <img src={appsCover} alt="" />
          </div>
        </div>

        <div className="grid-item blogs-item coverimg">
          <div className="openItem">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="contentItem">
            <img id="blogSpiral" src={blogsSpiral} alt="" />
            <img src={blogsCover} alt="" />
          </div>
        </div>

        <div className="grid-item big-item3-1 wip-item">
          <div className="contentItem">
            <img src={wipSticker} alt="" />
          </div>
        </div>

        <div className="grid-item twitter-item">
          <div className="contentItem">
            <Tweet tweetId="1688128073596559360" />
            <Tweet tweetId="1679059141694836736" />
          </div>
        </div>

        <div className="grid-item mascot-item coverimg">
          <div className="contentItem">
            <img src={astronautSticker} alt="" />
          </div>
        </div>

        <div className="grid-item xtreak-item">
          <div className="openItem">
            <img src={arrowIcon} alt="" />
          </div>
          <div className="contentItem">
            {/* <iframe
              src="https://xtreak.netlify.app/"
              frameBorder="0"
              width="100%"
              height="100%"
            /> */}
            <p>100 days of building </p>
            <p>Started on 01 Feb 2023</p>

            <img src={xtreakCover} alt="" />
          </div>
        </div>

        <div className="grid-item newsletter-item">
          <div className="contentItem">
            <p>
              Sign up to get the <b>juiciest behind the scenes!</b>
            </p>

            <iframe
              src="https://embeds.beehiiv.com/a3e9c954-5128-4d3d-9b41-ac9567390374?slim=true"
              data-test-id="beehiiv-embed"
              width="90%"
              height="52"
              frameBorder="0"
              scrolling="no"
              style={{
                zIndex: "10",
                margin: "0",
                borderRadius: "0px",
                backgroundColor: "transparent",
              }}
            />
            <p>
              <i>
                Only accepting the <b>first 50 people</b>
              </i>
            </p>
            <img src={newsCover} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
