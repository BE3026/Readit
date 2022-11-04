import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbedHeal.css";
const YoutubeEmbedEc6 = ({ embedId }) => (
  <div className="video-responsive">
    <center>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xweu7K3RmUk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UOgxPAXKkLA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </center>
  </div>
);

YoutubeEmbedEc6.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbedEc6;
