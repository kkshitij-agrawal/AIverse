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

import ss_ideator from "./Assets/ss_ideator.png";
import ss_vacay from "./Assets/ss_vacay.png";
import ss_desfly from "./Assets/ss_desfly.png";
import ss_playbook from "./Assets/ss_playbook.png";
import ss_alumnimapiiitd from "./Assets/ss_alumnimap.png";
import ss_oldme from "./Assets/ss_oldme.png";

import icon_linkedin from "./Assets/icon_linkedin.png";
import icon_twitter from "./Assets/icon_twitter.png";
import icon_website from "./Assets/icon_website.png";
import icon_medium from "./Assets/icon_medium.svg";

import { Tweet } from "react-twitter-widgets";

export default function App() {

  const appsData = [
    { id: 1, name: 'AI Ideator', icon: ss_ideator, url: 'https://www.ideator.design/' },
    { id: 2, name: 'Vacation Planner', icon: ss_vacay, url: 'https://vacayplan.netlify.app/' },
    { id: 3, name: '0 to 1 in UX Design', icon: ss_desfly, url: 'https://www.desfly.me/' },
    { id: 4, name: 'IIITD Playbook', icon: ss_playbook, url: 'https://iiitdplaybook.web.app/' },
    { id: 5, name: 'Alumni Map', icon: ss_alumnimapiiitd, url: 'https://alumnimapiiitd.netlify.app/' },
    { id: 6, name: '2021 Me', icon: ss_oldme, url: 'https://imkshitij.com/' },
   
  ];

  const socialsData = [
    { id: 1, name: 'LinkedIn', icon: icon_linkedin, url: 'https://www.linkedin.com/in/kshitij16/' },
    { id: 2, name: 'X (Twitter)', icon: icon_twitter, url: 'https://twitter.com/imkshitij16' },
    { id: 3, name: '2021 Me', icon: icon_website, url: 'https://imkshitij.com/' },
    { id: 4, name: 'Medium', icon: icon_medium, url: 'https://medium.com/@kshitij16' },
  ];
  
  const handleCellClick = (url) => {
    window.open(url, '_blank'); // '_blank' opens the link in a new tab
  };

  return (
    <div className="App">
      <div className="grid-container">
        <div className="grid-item big-item">
          <div className="openItem">
            <img src={arrowIcon} alt="" onClick={() => handleCellClick('https://aiverse.design/')} />
          </div>
          <div className="contentItem">
            {/* <img id="spacebg" src={spacebg} alt="" /> */}
            <p></p>
            <img src={headline} alt="" />

            <p>
              on a mission to unbundle the current processes; design and build
              for the future
            </p>
          </div>
        </div>
  
        <div className="grid-item apps-item">
          {/* <div className="openItem">
            <img src={arrowIcon} alt="" />
          </div> */}
          <div className="contentItem">
          <div className="appsgrid">
            {appsData.map((app) => (
              <div key={app.id} className="appsgrid-cell" onClick={() => handleCellClick(app.url)}>
                <img src={app.icon} alt={app.name} className="app-icon" />
                <div className="app-name">{app.name}</div>
              </div>
              ))}
          </div>
            {/* <img id="appGrid" src={projectsGrid} alt="" /> */}
            {/* <img src={appsCover} alt="" /> */}
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
            <img className="stickerExtra" src={wipSticker} alt="" />
            Researching AI interactions
            <img src={ss_ideator} alt="" />
            <img src={ss_ideator} alt="" />

          </div>
        </div>

        <div className="grid-item twitter-item">
          <div className="contentItem">
            <Tweet tweetId="1732873348882088151" />
            <Tweet tweetId="1745053318571786565" />
            <Tweet tweetId="1729853765581230462" />
            <Tweet tweetId="1688128073596559360" />
            <Tweet tweetId="1679059141694836736" />
          </div>
        </div>

        <div className="grid-item mascot-item">
          <div className="contentItem">
            <div className="astroItem"><img id="astrosticker" src={astronautSticker} alt="" /></div>
            <div className="socialsgrid">
            {socialsData.map((app) => (
              <div key={app.id} className="socialsgrid-cell" onClick={() => handleCellClick(app.url)}>
                <img src={app.icon} alt={app.name} className="social-icon" />
                <div className="social-name">{app.name}</div>
              </div>
              ))}
          </div>
          </div>
        </div>

        <div className="grid-item xtreak-item">
          <div className="openItem">
            <img src={arrowIcon} alt="" onClick={() => handleCellClick('https://xtreak.netlify.app/')} />
          </div>
          <div className="contentItem">
            <iframe
              src="https://xtreak.netlify.app/"
              frameBorder="0"
              width="100%"
              height="100%"
            />
            {/* <p>100 days of building </p>
            <p>Started on 01 Feb 2023</p>

            <img src={xtreakCover} alt="" /> */}
          </div>
        </div>

        <div className="grid-item newsletter-item">
          <div className="contentItem">
            <p>
              Connecting the dots between <b>AI and Design!</b>
            </p>

            <iframe
              src="https://embeds.beehiiv.com/a3e9c954-5128-4d3d-9b41-ac9567390374?slim=true"
              data-test-id="beehiiv-embed"
              id="beehiivembed"
              frameBorder="0"
              scrolling="no"
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
