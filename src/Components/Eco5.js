import React from "react";

import pho5 from "./images/biopl.jpg";
import YoutubeEmbedEc5 from "./YoutubeEmbedEc5.js";
function Eco5() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>Bioplastics for a circular economy</h2>

        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pho5} style={{ marginRight: "300px" }} />
        <br />
        <h3>Description</h3>
        <p>
          Bioplastics — typically plastics manufactured from bio-based polymers
          — stand to contribute to more sustainable commercial plastic life
          cycles as part of a circular economy, in which virgin polymers are
          made from renewable or recycled raw materials. Carbon-neutral energy
          is used for production and products are reused or recycled at their
          end of life (EOL). In this Review, we assess the advantages and
          challenges of bioplastics in transitioning towards a circular economy.
          Compared with fossil-based plastics, bio-based plastics can have a
          lower carbon footprint and exhibit advantageous materials properties;
          moreover, they can be compatible with existing recycling streams and
          some offer biodegradation as an EOL scenario if performed in
          controlled or predictable environments
        </p>
        <h3>End-of-life and circular economy principles</h3>
        <p>
          In an ideal circular economy, plastics would be made from renewable or
          recycled resources. However, the traditional life of most plastic
          materials is linear. 79% of all plastic produced has been dumped into
          landfill sites or reached the environment, while the remainder has
          been incinerated (12%) or recycled (9%). Although recycling has
          increased since the 1980s, the recycling of non-fibre plastic remains
          stagnated at 18% and almost no textile fibres are recycled. The lack
          of progress is largely due to the limitations of the dominant form of
          recycling — mechanical recycling — which converts waste plastics into
          new shapes through mechanical force and heat. Product quality is,
          therefore, highly dependent on input quality and, thus, mechanical
          recycling ideally requires well-sorted and contamination-free plastic
          waste, which is often scarce. By contrast, different forms of chemical
          recycling offer a more resilient and flexible way to recycle mixed and
          contaminated plastic waste, as well as popular multilayer
          materials2,54. Chemical recycling first depolymerizes the polymer to
          recover the monomers, which, after appropriate separation, can undergo
          repolymerization into materials of defined quality. However, these
          processes are more complex and, thus, more expensive, particularly
          during the implementation phase, and, therefore, require financial
          incentives. Biodegradation is an EOL option largely for easily
          hydrolysable polymers, such as aliphatic esters like polylactic acid
          (PLA), but should be performed only in controlled industrial settings
          to ensure complete digestion without uncontrolled side effects, such
          as leakage of contaminants or microplastic formation
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

            <YoutubeEmbedEc5 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Eco5;
