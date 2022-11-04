import React from "react";
import ReactDOM from "react-dom/client";

import "./Sports.css";
import YoutubeEmbedSports from "./YoutubeEmbedSports.js";
import img1 from "./images/cricketpsy.jpg";
import img2 from "./images/football.jpg";
import img3 from "./images/golf.jpg";
import img4 from "./images/hockey.jpg";
import img5 from "./images/ipl.jpg";
import img6 from "./images/athletics.jpg";
function Sports() {
  return (
    <div>
      <center>
        <h1
          className="titlename"
          style={{
            color: "#044269",
            fontSize: "40px"
          }}
        >
          SPORTS
        </h1>{" "}
      </center>
      <div className="maincontt">
        <div className="content">
          <div className="example">
            <a href="/sports/article1">
              <img src={img1} className="piv" />

              <h2>Physiological requirements of cricket</h2>
              <p>
                Despite its long history and global appeal, relatively little is
                known about the physiological and other requirements of cricket.
                It has been suggested that the physiological demands of cricket
                are relatively mild, except in fast bowlers during prolonged
                bowling spells in warm conditions.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/sports/article2">
              <img src={img2} className="piv" />
              <h2>Match analysis in football: a systematic review</h2>
              <p>
                The main focus of this paper was to review the available
                literature on match analysis in adult male football. The most
                common research topics were identified, their methodologies
                described and the evolutionary tendencies of this research area
                systematised. A systematic review of Institute for Scientific
                Information (ISI) Web of Knowledge database was performed
                according to PRISMA (Preferred Reporting Items for Systematic
                reviews and Meta-analyses) guidelines.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/sports/article3">
              <img src={img3} className="piv" />
              <h2>The frequency of golf injuries.</h2>
              <p>
                Although golf has not been recognized as a sport associated with
                injuries, epidemiologic studies document that back and elbow
                injuries are most common in male amateur golfers. Lower back and
                wrist injuries occur in the male golf professional while female
                professional golfers are more likely to suffer injuries to the
                wrist and lower back, respectively.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/sports/article4">
              <img src={img4} className="piv" />
              <h2>The Developmental Activities of Elite Ice Hockey Players</h2>
              <p>
                The purpose of this study was to analyze the development of four
                20 year-old elite hockey players through an in-depth examination
                of their sporting activities. The theoretical frameworkof
                deliberate practice (Ericsson, Krampe, & Tesch-Romer, 1993) and
                the notion of deliberate play (Côté, 1999) served as the
                theoretical foundations.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>{" "}
            </a>
          </div>
          <div className="example">
            <a href="/sports/article5">
              <img src={img5} className="piv" />
              <h2>IPL Visualization and Prediction Using HBase</h2>
              <p>
                With the increasing number of matches day by day, it has become
                difficult to manage or extract useful information from the
                available data of all the matches. The paper presents a data
                visualization and prediction tool in which an open-source,
                distributed, and non-relational database, HBase is utilized to
                keep the data related to IPL (Indian Premier League) cricket
                matches and players.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>{" "}
            </a>
          </div>
          <div className="example">
            <a href="/sports/article6">
              <img src={img6} className="piv" />
              <h2>Leadership and Satisfaction in Athletics</h2>
              <p>
                This study investigated (a) the differences between the
                offensive and defensive personnel of football teams in preferred
                leadership, perceived leadership, and satisfaction with
                leadership, and (b) the relationships among preferred and
                perceived leadership, their congruence, and satisfaction with
                leadership.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>{" "}
            </a>
          </div>
        </div>
        <center>
          <div className="bor">
            <YoutubeEmbedSports embedId="rokGy0huYEA" />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Sports;
