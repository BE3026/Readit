import React from "react";
import pict6 from "./images/med.jpg";
import News from "./news.js";
import "./images.css";
import pict1 from "./images/covid1.jpg";
import YoutubeEmbedHeal from "./YoutubeEmbedHeal5.js";
function heal1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>The Evolution of Medical Uncertainty</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pict6} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          Modern developments of scientific medicine have uncovered and created
          uncertainties and risks that were previously not known or experienced;
          the stakes have become very much higher. The rise in public
          expectations, however, is paralleled by a lowered tolerance of
          uncertainty. Metaphors of "deliverance" and "disaster" abound in
          discussions of scientific discovery, reflecting differing conceptions
          and philosophies about errors and mistakes, and the role they play in
          the physical universe, the biosphere, and human affairs. These
          concerns highlight the difficulties and dilemmas of finding
          scientifically adequate, culturally appropriate, and socially
          effective ways of appraising and controlling risk.
          <h2>Summary</h2>
          Modern developments of scientific medicine have uncovered and created
          uncertainties and risks that were previously not known or experienced;
          the stakes have become very much higher. The rise in public
          expectation, however, is paralleled by a lowered tolerance of
          uncertainty. Metaphors of "deliverance" and "disaster" abound in
          discussions of scientific discovery, reflecting differing conceptions
          and philosophies about errors and mistakes, and the role they play in
          the physical universe, the biosphere, and human affairs. These
          concerns highlight the difficulties and dilemmas of finding
          scientifically adequate, culturally appropriate, and socially
          effective ways of appraising and controlling risk.
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

            <YoutubeEmbedHeal />
          </div>
        </center>
      </div>
    </div>
  );
}

export default heal1;
