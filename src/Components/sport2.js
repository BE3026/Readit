import React from "react";
import photo2 from "./images/foo.jpg";
import News from "./news.js";
import "./images.css";
import YoutubeEmbedSpo2 from "./YoutubeEmbedSpo2.js";
function sport2() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>Match analysis in football: a systematic review</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={photo2} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          The main focus of this paper was to review the available literature on
          match analysis in adult male football. The most common research topics
          were identified, their methodologies described and the evolutionary
          tendencies of this research area systematised. A systematic review of
          Institute for Scientific Information (ISI) Web of Knowledge database
          was performed according to PRISMA (Preferred Reporting Items for
          Systematic reviews and Meta-analyses) guidelines. The following
          keywords were used: football and soccer, each one associated with the
          terms: match analysis, performance analysis, notational analysis, game
          analysis, tactical analysis and patterns of play. Of 2732 studies
          initially identified, only 53 were fully reviewed, and their outcome
          measures abstracted and analysed. Studies that fit all inclusion
          criteria were organised according to their research design as
          descriptive, comparative or predictive. Results showed that 10 studies
          focused predominantly on a description of technical, tactical and
          physical performance variables. From all comparative studies, the
          dependent variables more frequently used were “playing position” and
          “competitive level”. Even though the literature stresses the
          importance of developing predictive models of sports performance, only
          few studies (n = 8) have focused on modelling football performance.
          Situational variables like game location, quality of opposing teams,
          match status and match half have been progressively included as object
          of research, since they seem to work as effective covariables of
          football performance. Taking into account the limitations of the
          reviewed studies, future research should provide comprehensive
          operational definitions for the studied variables, use standardised
          categories and description of activities and participants, and
          consider integrating the situational and interactional contexts into
          the analysis of football performance.
          <h2>Things to do</h2>
          In the first place, when you watch a game, start with general things:
          Don’t look at the ball because you can’t see the most important things
          such as movements and rotations which are the most important things in
          football. Focus solely on the team you are analyzing, you can do both
          teams once you are more experienced. If I have a team to suggest to
          you other than your favorite team (which is good because your brain
          will not focus on dumb things like knowing all players that play for
          the team you are analyzing as you already know them), 2017/18
          Manchester City is the move. I learned a lot from Guardiola and it’s
          the first team that comes into my mind as they are the closest I can
          think of to a ‘complete’ team (Conte’s Inter and Tuchel’s Chelsea not
          bad as well). Now, let’s move to what you should look at: Do they
          start from the back? By that, I mean, is there an emphasis to play
          with the goalkeeper and be patient to find space higher up the pitch?
          Do they play out the back without being patient? Do they immediately
          go long? Etc… When they are higher up the pitch, how are the players
          positioned? A lot of players in the middle of the pitch with no width,
          extreme width provided by two players close to each other on the same
          side with only one on the opposite side of the ball, good enough
          width. Players in the middle positioned between the defensive and
          midfield line, players asking short, 2/3/4 players in the first phase,
          etc… Does the positioning of the players allow them to be reactive to
          the loss? If yes, why? If not, why not? This was the first part of
          your analysis. By that, I mean it’s the part where you will need some
          days or some weeks to see everything. Once you have done that, you can
          start asking yourself the main question after seeing what is going on:
          what is the purpose (the why) and which advantage does it give? This
          is the second part of your analysis and this is where you will need to
          pause and rewind passages of play more because you will have to look
          at the opposition as well.
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

            <YoutubeEmbedSpo2 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default sport2;
