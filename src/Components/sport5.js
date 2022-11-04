import React from "react";

import News from "./news.js";
import "./images.css";
import YoutubeEmbedSpo5 from "./YoutubeEmbedSpo5.js";
import photo5 from "./images/ipl1.jpg";

function heal1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>IPL Visualization and Prediction Using HBase</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={photo5} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          The game of cricket is played in various formats, i.e., One Day
          International, T20 and Test Matches. The Indian Premier League (IPL)
          is a Twenty-20 cricket tournament league established with the
          objective of promoting cricket in India and thereby nurturing young
          and talented players. The league is an annual event where teams
          representing different Indian cities compete against each other. It
          was started by the Board of Control for Cricket in India (BCCI) and
          has now become a giant, remunerative cricket venture. The teams for
          IPL are selected by means of an auction. Players' auctions are not a
          new phenomenon in the sports world. However, in India, selection of a
          team from a pool of available players by means of auctioning of
          players was done in Indian Premier League (IPL) for the first time.
          Due to the involvement of money, team spirit, city loyalty and a
          massive fan following, the outcome of matches is very important for
          all stake holders. This, in turn, is dependent on the complex rules
          governing the game, luck of the team (Toss),the ability of players and
          their performances on a given day. Various other natural parameters,
          such as the historical data related to players, play an integral role
          in predicting the outcome of a cricket match.
          <h2>Related Work</h2>
          Sports analytics has been successfully applied in sports. In soccer,
          it is common to rely on ratings by experts to assess a player’s
          performance. However, the experts do not unravel the criteria they use
          for their rating. The work in [2] attempts to identify the most
          important attributes of a player’s performance that determine expert
          ratings. In this work, a series of classifications with three
          different pruning strategies and an array of machine learning based
          algorithms are executed. Then, a list of most important performance
          metrics for each of the four playing positions which approximates the
          attributes considered by the experts are obtained while assigning
          ratings. The authors in [4] analyzed many data mining techniques and
          the obtained prediction results are compared to arrive at a suitable
          model for prediction of results for matches played by the Dutch soccer
          team. These results are built using Naïve Bayes model, a random tree
          model and a k-nearest neighbor model. Out of these, the most suitable
          model is selected and its results are analyzed further. In this
          manner, the variables with the least and most predictive power can be
          identified from the best prediction model.
          <h2>Proposed tool</h2>
          Around 644 matches have taken place from 2008 to 2017 in IPL, making
          it one of the biggest leagues in history of T20 cricket with
          viewership of millions of people. To store this large amount of data
          which may include ball by ball details, a database for big data, i.e.,
          HBase is used in this work, due to its features as follows: 
          Scalability in both linear and modular form  Automatic as well as
          configurable sharding of tables  Provision for distributed storage in
          the form of HDFS (Hadoop Distributed File System)  Consistent read
          and write operations  Automatic failover support  Support for Java
          APIs so that clients can access it easily  Support for MapReduce for
          parallel processing of large volume of data  Back up of Hadoop
          MapReduce jobs in HBase tables  Block cache and Bloom filters for
          easy real time query processing
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

            <YoutubeEmbedSpo5 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default heal1;
