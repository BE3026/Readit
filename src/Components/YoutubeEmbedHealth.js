import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbedHealth.css";
import "./bord1.png";
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive1">
    <center>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/iOE4-3IsX3M"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eRqYUTA5JJo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </center>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
