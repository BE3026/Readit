import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbedMain.css";
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive2">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Zu1p99GJuTo"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
