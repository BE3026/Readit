import React from "react";

import pho6 from "./images/res.jpg";
import YoutubeEmbedEc6 from "./YoutubeEmbedEc6.js";
function Eco6() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>Little chance of falling into a recession</h2>

        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pho6} style={{ marginRight: "300px" }} />
        <br />
        <h3>What it will look like?</h3>
        <p>
          These days it is hard to turn a corner without bumping into
          predictions of an American recession. Big banks, prominent economists
          and former officials are all saying that a downturn is a near
          certainty as the Federal Reserve wrestles inflation under control.
          Three-quarters of chief executives of Fortune 500 companies are braced
          for growth to go negative before the end of 2023. Bond yields and
          consumer surveys are flashing red. Google searches for “recession” are
          soaring. The track record is certainly ominous. As Larry Summers, a
          former treasury secretary, has observed, whenever inflation has risen
          above 4% and unemployment has dipped below 4%—two thresholds that,
          when breached, indicate economic overheating—America has suffered a
          recession within two years. It is well across both thresholds now.
        </p>
        <h3>What economists say about the chance of recession.</h3>
        <p>
          High inflation, rising interest rates, shaky economic activity and
          volatile markets have raised the probability that the U.S. economy
          will slip into a recession, according to economists. But the range of
          their forecasts is wide, from a relatively remote chance of a
          recession — commonly defined as a shrinking of the economy for two
          consecutive quarters — to more confident predictions that a downturn
          is imminent. In general, forecasters who say a recession will be
          avoided emphasize that they might be too optimistic, while those who
          are confident that the economy will shrink are quick to say the
          recession won’t be that bad.
        </p>
        <h3>
          The US economy is ‘nowhere near a recession this year,’ says an
          economist—but 2023 is a different story
        </h3>
        <p>
          Although it is impossible to know for sure, the odds of a U.S.
          recession in the next year have been steadily rising, according to a
          recent Bloomberg survey of 37 economists. They have the probability
          pegged at 30%, which is double the odds from three months ago. To put
          that number into context, the threat of a recession is typically about
          15% in a given year, due to unexpected events and numerous variables.
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

            <YoutubeEmbedEc6 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Eco6;
