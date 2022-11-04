import React from "react";

import News from "./news.js";
import "./images.css";
import photo1 from "./images/cri1.jpg";
import YoutubeEmbedSpo1 from "./YoutubeEmbedSpo1.js";
function sport1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>Physiological requirements of cricket</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={photo1} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction </h2>
          Let’s breakdown the psychology of cricket a little. It is both a team
          sport and an individual sport. Due to this cricketers need
          psychological skills that would apply both to team and individuals
          athletes. Imagine rugby league and golf had a baby! For example,
          cricket batters requires very specialised forms of communication. The
          kind normally only applicable to those who play “doubles” in sports.
          The communication between two batsmen whilst out in the middle is very
          similar to a doubles pair in tennis. Is this type of communication
          rehearsed in training? Not a lot in my experience, even at
          international level. Communication is a psychological skill even if
          the communicating is about something very tactical. That is why we
          have dedicated an entire module of our online, self-guided Mental
          Toughness Training program for cricket (“Metuf for Cricket”) to team
          unity and communication skills. Cricketers execute their skills as
          individuals but do so as part of a team. Therefore concepts such as
          team unity and the culture of the dressing room are all pivotal.
          Without these success will be hard to find.
          <h2>Miracle</h2>
          THE WORLD CUP FINAL OVER In case readers do no follow cricket then let
          Wikipedia summarise what happened at the end of the Cricket Wolrd Cup
          that took place in England early this year. The final took place
          between New Zealand and England (hosts) on 14th July 2019 at Lords
          (the home of cricket): The two teams were tied on 241 runs at the end
          of the match, resulting in a Super Over being played to break the tie.
          On the final ball of New Zealand’s Super Over, after equalling the 15
          runs England managed in their over, Martin Guptill attempted to score
          the winning run but was run out by wicket-keeper Jos Buttler, meaning
          the Super Over was also tied. England won on the boundary countback
          rule, having scored 26 boundaries to New Zealand’s 17, thus becoming
          Cricket World Cup winners for the first time. What was remarkable from
          a cricket psychology point of view was just how well all of the
          players and the umpires handled the extreme pressure of the situation.
          Huge credit needs to go into those who were assisting with the mental
          side of preparation of both the Kiwi and Pommy cricket teams.
          <h2>Steve Smith</h2>
          In 2018 Steve Smith was banned for 12 months for the role he played in
          the ball-tampering incident that shook the world of cricket. Although
          as performance psychologists we are mindful never to judge everything
          on the results the fact that Smith scores 333 more runs than any other
          player in the series (both side) is truly incredible. Obviously we’re
          biased but it would be hard not to suggest the reason for Smith’s
          dominance with the bat is due to his amazing cricketing mental
          toughness
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

            <YoutubeEmbedSpo1 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default sport1;
