import React from "react";

import pho2 from "./images/curen.jpg";
import YoutubeEmbedEc2 from "./YoutubeEmbedEc2.js";

function Eco2() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>The world’s currencies are falling against the dollar</h2>

        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pho2} style={{ marginRight: "300px" }} />
        <br />
        <h3>The Current Talk</h3>
        <p>
          Global foreign-currency reserves are falling at the fastest pace on
          record as central banks from India to the Czech Republic intervene to
          support their currencies. Reserves have declined by about $1 trillion,
          or 7.8%, this year to $12 trillion, the biggest drop since Bloomberg
          started to compile the data in 2003
        </p>
        <h3>
          Union Minister for Finance and Corporate Affairs Nirmala Sitharaman
          says
        </h3>
        <p>
          Finance Minister Nirmala Sitharaman on Saturday said the rupee has
          "held back very well" against the United States dollar when compared
          to other currencies. Finance Minister Nirmala Sitharaman on Saturday
          said the rupee has “held back very well” when compared to other
          currencies against the US Dollar.
        </p>
        <h3>Flight to safety</h3>
        <p>
          Meanwhile, what’s directly hammering dollar exchange rates is a more
          technical second-order impact of rising prices in the U.S. As Jerome
          Powell and the Federal Reserve raise interest rates to fight domestic
          inflation, American dollars and Treasury instruments become far more
          attractive investments. That’s part of why U.S. stocks are dropping,
          and the same dynamic is encouraging investors worldwide to swap from
          yen, euros, pounds and yuan into dollars to reap the 4% low-risk yield
          on the two-year Treasury bond. That’s where a third factor enters the
          explanation – and one with serious lessons for those thinking about
          finance in crypto. There are other currencies offering much bigger
          bond yields than the U.S. – Turkey’s two-year yield is over 13%, for
          instance. But as depositors in LUNA’s Anchor protocol found out when
          that system collapsed in May, yield ain’t nothin’ but a number.
          Thirteen percent on Turkish lira is still a hard sell versus 4% on
          U.S. dollars because of the greater global faith in the fundamental
          productivity of the U.S. economy, and the responsible management of
          the U.S. currency.
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

            <YoutubeEmbedEc2 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Eco2;
