import React from "react";

import News from "./news.js";
import "./images.css";
import YoutubeEmbedSpo4 from "./YoutubeEmbedSpo4.js";
import photo4 from "./images/hoc.jpg";

function heal1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>The Developmental Activities of Elite Ice Hockey Players</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={photo4} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          The purpose of this study was to analyze the development of four 20
          year-old elite hockey players through an in-depth examination of their
          sporting activities. The theoretical frameworkof deliberate practice
          (Ericsson, Krampe, & Tesch-Romer, 1993) and the notion of deliberate
          play (Côté, 1999) served as the theoretical foundations. Interviews
          were conducted to providea longitudinal and detailed account of each
          participant.s involvement in various sporting activities. The
          interviewer asked questions about the conditions and sporting
          activities for eachyear of development. The data obtained were
          validated through independent interviews conducted with three parents
          of three different athletes. The results were consistent with
          Côté.s(1999) three stages of development in sport: the sampling (age
          6.12), specializing (age 13. 15), and investment (age 16+) years.
          <h2>Data collection</h2>
          The purpose of the data collection was to examine the development of
          these four elitehockey players from the age of 6 until the age of 20.
          The goal of the interview with the athleteswas to systematically
          obtain detailed information about the types of sporting activities
          theparticipants were involved in at various stages of their
          development (Côté, Ericsson, & Beamer,2002). The information was
          recorded on three separate charts that included (a) type of
          sportingactivity, (b) age of initial involvement, (c) level of
          involvement, (d) age the activity was stopped,(e) components of the
          activity (i.e., games, practices, training camps), (f) hours per week
          spentparticipating in the activity, and (g) months per year spent
          participating in the activity. Thesecharts provided a longitudinal,
          systematic, and detailed account of each participants involve-ment in
          sport. A second objective of the interview was to understand the true
          nature of eachactivity by having athletes discuss their involvement in
          each activity in terms of enjoyment,effort, concentration, and
          relevance. Finally, the parent most knowledgeable (as determinedby the
          athlete) about the sporting activities of three of the four athletes
          was interviewed.
        </p>
      </div>
      {/* <div className="promo" style={{ height: "500px" }}> */}
      <div className="bor1">
        <center>
          <div className="video">
            <h3
              style={{
                marginLeft: "50px",

                fontSize: "22px"
              }}
            >
              Recommended Videos
            </h3>
            <p style={{ marginLeft: "50px", fontSize: "20px" }}>To Watch</p>

            <YoutubeEmbedSpo4 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default heal1;
