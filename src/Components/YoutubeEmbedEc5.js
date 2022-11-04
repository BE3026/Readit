import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbedHeal.css";
const YoutubeEmbedEc5 = ({ embedId }) => (
  <div className="video-responsive">
    <center>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uH0_XeXI_yo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BuCmIdKk6U0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </center>
  </div>
);

YoutubeEmbedEc5.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbedEc5;
