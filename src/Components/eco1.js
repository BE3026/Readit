import React from "react";

import pho1 from "./images/ec1.jpg";
import YoutubeEmbedEc1 from "./YoutubeEmbedEc1.js";
function Eco1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>Creation of India as a Sustainable Economy</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pho1} style={{ marginRight: "300px" }} />
        <br />
        <h3>Concept of sustainable economy and its benefits</h3>
        <p>
          Presently, in the current circumstances of the world economy, the
          inclusion of a sustainable economy has created a positive impact on
          the financial performance of the developing countries. Sustainable
          economy is a sustainable development policy that supports a country to
          allocate the resources equally among the population of the country.
          The implication of the sustainable economy has the potential to create
          a positive influence on the society as well asthe environment of a
          country. The main goal of the sustainable economy is to provide or
          distribute the resources amidst the population of a country that
          create a positive impact on the activities of human beings. In order
          to create the economy of India as a sustainable economy, it is
          necessary to understand the importance and challenges of the inclusion
          of a sustainable economy. Therefore, the research study will provide a
          sustainable viewpoint about the impact of a sustainable economy on the
          financial performance of a country.The concept of sustainable economy
          has 3 main factors such as social, economic and environmental. These 3
          factors of the sustainable economy have created a positive influence
          on the development of a country.
        </p>
        <h3>
          Impact of the sustainable economy on the financial performance of a
          country
        </h3>
        <p>
          In recent times, the inclusion of a sustainable economy has created a
          positive impact on the financial performance of an organization
          through enhancing financial inclusion.Banks that are utilizing the
          sustainable economy are more inclined to gain the trust of the
          consumers, as a result that supports the bank to gain more loyal
          consumers. In addition, utilization of a sustainable economy can also
          create a positive impact on the performance of a financial
          organization through maintaining a good relationship with the
          company’s stakeholders
        </p>
        <h3>Conclusion</h3>
        <p>
          As India is a developing country, therefore there are a lot of goals
          of sustainable development that need to be accomplished in order to
          enhance the development of India. The research study has provided a
          sustainable viewpoint about the way the inclusion of a sustainable
          economy can create a positive impact on the performance of an
          organization as well as the development of a country. In India,
          climate change and lack ofsmart city projects are creating a negative
          influence on the development of human well-being. Therefore, in order
          to prevent those issues India must need to be a sustainable economic
          country by accomplish the 17 the goalsto be a sustainable development
          country.
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

            <YoutubeEmbedEc1 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Eco1;
