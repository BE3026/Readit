import React from "react";

import pho3 from "./images/glo.jpg";
import YoutubeEmbedEc3 from "./YoutubeEmbedEc3.js";
function Eco3() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>
          Global growth is forecast to slow from 6.0 percent in 2021 to 3.2
          percent in 2022 and 2.7 percent in 2023.
        </h2>

        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pho3} style={{ marginRight: "300px" }} />
        <br />
        <h3>Global Condition</h3>
        <p>
          Global economic activity is experiencing a broad-based and
          sharper-than-expected slowdown, with inflation higher than seen in
          several decades. The cost-of-living crisis, tightening financial
          conditions in most regions, Russia’s invasion of Ukraine, and the
          lingering COVID-19 pandemic all weigh heavily on the outlook. Global
          growth is forecast to slow from 6.0 percent in 2021 to 3.2 percent in
          2022 and 2.7 percent in 2023. This is the weakest growth profile since
          2001 except for the global financial crisis and the acute phase of the
          COVID-19 pandemic. Global inflation is forecast to rise from 4.7
          percent in 2021 to 8.8 percent in 2022 but to decline to 6.5 percent
          in 2023 and to 4.1 percent by 2024. Monetary policy should stay the
          course to restore price stability, and fiscal policy should aim to
          alleviate the cost-of-living pressures while maintaining a
          sufficiently tight stance aligned with monetary policy.
        </p>
        <h3>Inflation and uncertainty</h3>
        <p>
          Global economic activity is experiencing a broad-based and
          sharper-than-expected slowdown, with inflation higher than seen in
          several decades. The cost-of-living crisis, tightening financial
          conditions in most regions, Russia’s invasion of Ukraine, and the
          lingering COVID-19 pandemic all weigh heavily on the outlook. Global
          growth is forecast to slow from 6.0 percent in 2021 to 3.2 percent in
          2022 and 2.7 percent in 2023. This is the weakest growth profile since
          2001 except for the global financial crisis and the acute phase of the
          COVID-19 pandemic. Global inflation is forecast to rise from 4.7
          percent in 2021 to 8.8 percent in 2022 but to decline to 6.5 percent
          in 2023 and to 4.1 percent by 2024. Monetary policy should stay the
          course to restore price stability, and fiscal policy should aim to
          alleviate the cost-of-living pressures while maintaining a
          sufficiently tight stance aligned with monetary policy.{" "}
        </p>
        <h3>Global Prospects and Policies</h3>
        <p>
          Inflation has reached a 40-year high in some economies. Although wage
          growth has generally stayed below inflation so far, some observers
          warn that prices and wages could start feeding off each other, with
          wage and price inflation ratcheting up in a sustained wage-price
          spiral. This chapter examines past and recent wage dynamics and sheds
          light on prospects. Similar historical episodes were not followed by
          wage-price spirals on average. Analysis highlights that more
          backward-looking expectations require stronger and more frontloaded
          monetary tightening to reduce risks of inflation de-anchoring. Risks
          of a sustained wage-price spiral appear limited since underlying
          inflation shocks come from outside the labor market and monetary
          policy is tightening aggressively
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

            <YoutubeEmbedEc3 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Eco3;
