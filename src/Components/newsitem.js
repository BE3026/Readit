import React from "react";

const Newsitem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="newsapicontent">
      <img src={urlToImage} style={{ width: "100%" }} alt="new image" />
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default Newsitem;
