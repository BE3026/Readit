import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbedHeal.css";
const YoutubeEmbedHeal = ({ embedId }) => (
  <div className="video-responsive">
    <center>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/yGtKlYPuFfU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QPkekDmo8w4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </center>
  </div>
);

YoutubeEmbedHeal.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbedHeal;
