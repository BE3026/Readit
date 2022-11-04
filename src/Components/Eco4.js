import React from "react";

import pho4 from "./images/greefas.jpg";
import YoutubeEmbedEc4 from "./YoutubeEmbedEc4.js";
function Eco4() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>
          Transition toward green economy: Technological Innovation's role in
          the fashion industry
        </h2>

        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pho4} style={{ marginRight: "300px" }} />
        <br />
        <h3>Green economy and Fashion</h3>
        <p>
          The consumption of unsustainable fashion and wasteful practices have
          recently attracted significant attention in practice and academia. The
          global fashion industry is expected to grow from $1.5 trillion in 2020
          to approximately $2.25 trillion by 2025, indicating a continuous
          growth in demand. New technological developments are used to
          transition to a green economy and to promote an environmentally
          conscious fashion movement. Technology may seem counterintuitive, but
          becoming more sustainable is crucial for fashion, which is often an
          accelerant of waste. Sustainable fashion technologies significantly
          impact waste reduction through materials, products, and consumer
          experiences. Material changes made by environmentally conscious
          businesses improve longevity and reduce resource consumption. Fashion
          startup managers can use the proposed model to gain a deeper
          understanding of how technological innovations help achieve a
          successfully sustainable fashion, while simultaneously improving
          sustainability practices.
        </p>
        <h3>How technology is making fashion more sustainable</h3>
        <p>
          Sustainability is defining the current zeitgeist and features in all
          facets of life, particularly in what we wear. Consumers invariably
          influence the fashion industry, and right now they are demanding for a
          paradigm shift to having sustainability, ethical practices, and
          transparency as the standard. According to Heuritech data, the social
          media hashtag #sustainablefashion, has skyrocketed in popularity, up
          1000% in the 3 years from 2018. The fashion industry is listening and
          is transitioning to this new standard to satisfy customers and earn
          their trust. According to the Global Fashion Market Place
          sustainability report, 82% of brands believe that they need
          sustainable business development and innovation support. This seismic
          shift is neither simple nor quick to implement, and fashion brands
          have realised that marketing and broad statements are not enough, as
          consumers will call them out for green washing.
        </p>
        <h3>The Environmental Cost of Fashion</h3>
        <p>
          While the fashion sector is booming, increasing attention has been
          brought to the impressive range of negative environmental impacts that
          the industry is responsible for. Fashion production makes up 10% of
          humanity’s carbon emissions, dries up water sources, and pollutes
          rivers and streams. What’s more, 85% of all textiles go to the dump
          each year (UNECE, 2018), and washing some types of clothes sends
          significant amount of microplastics into the ocean.The environmental
          and social cost of the fashion industry forces us to rethink fast
          fashion, and stresses the need for more sustainable business models
          and practices. Resources hereunder provide additional information on
          the environmental impacts of fashion, and potential pathways for
          change.
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

            <YoutubeEmbedEc4 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Eco4;
