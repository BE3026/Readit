import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbedHeal.css";
const YoutubeEmbedSpo1 = ({ embedId }) => (
  <div className="video-responsive">
    <center>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IWYDsIA9xiU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/9S4hRXRyAwE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </center>
  </div>
);

YoutubeEmbedSpo1.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbedSpo1;
