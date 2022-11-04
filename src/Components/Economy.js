import React from "react";
import ReactDOM from "react-dom/client";
import pict from "./images/img2.jpg";
import "./Economy.css";
import YoutubeEmbedEconomy from "./YoutubeEmbedEconomy";
import "./YoutubeEmbedHealth.css";
import imag1 from "./images/SUSTAINABILITY.jpg";
import imag2 from "./images/currency.jpg";
import imag3 from "./images/slowd.jpg";
import imag4 from "./images/fash.jpg";
import imag5 from "./images/bioplfin.jpg";
import imag6 from "./images/eco.jpg";

function Economy() {
  return (
    <div>
      <center>
        <h1
          className="titlename"
          style={{
            color: "#044269",
            fontSize: "40px"
          }}
        >
          ECONOMY
        </h1>{" "}
      </center>
      <div className="maincontt">
        <div className="content">
          <div className="example">
            <a href="/economy/article1">
              <img src={imag1} className="piv" />
              <h2>Creation of India as a Sustainable Economy</h2>
              <p>
                Sustainable economy is a concept that supports the development
                of human wellbeing, as the inclusion of a sustainable economy
                can preserve the natural resources for the future generation.
                Presently, the inclusion of a sustainable economy can support a
                country to enhance the financial performance by reducing the
                tariff cost and reducing the cutting fuel cost.
              </p>
              <button className="but" type="button">
                {" "}
                Read More
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/economy/article2">
              <img src={imag2} className="piv" />
              <h2>The world’s currencies are falling against the dollar</h2>
              <p>
                This summer, for the first time in over two decades, the euro
                fell below the dollar while the British pound dropped to as low
                as $1.03 on Monday.Developing nations have not only faced the
                real cost of essentials like oil, gas and fertilizer rising
                since the onset of the pandemic, but when the dollar rises, the
                price increases are magnified as these goods, especially oil,
                tend to be priced in dollars.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/economy/article3">
              <img src={imag3} className="piv" />
              <h2>
                Global growth is forecast to slow from 6.0 percent in 2021 to
                3.2 percent in 2022 and 2.7 percent in 2023.
              </h2>
              <p>
                Global economic activity is experiencing a broad-based and
                sharper-than-expected slowdown, with inflation higher than seen
                in several decades. The cost-of-living crisis, tightening
                financial conditions in most regions, Russia’s invasion of
                Ukraine, and the lingering COVID-19 pandemic all weigh heavily
                on the outlook.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/economy/article4">
              <img src={imag4} className="piv" />
              <h2>
                Transition toward green economy: Technological Innovation's role
                in the fashion industry
              </h2>
              <p>
                The consumption of unsustainable fashion and wasteful practices
                have recently attracted significant attention in practice and
                academia. The global fashion industry is expected to grow from
                $1.5 trillion in 2020 to approximately $2.25 trillion by 2025,
                indicating a continuous growth in demand
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>{" "}
            </a>
          </div>
          <div className="example">
            <a href="/economy/article5">
              <img src={imag5} className="piv" />
              <h2>Bioplastics for a circular economy</h2>
              <p>
                Bioplastics — typically plastics manufactured from bio-based
                polymers — stand to contribute to more sustainable commercial
                plastic life cycles as part of a circular economy, in which
                virgin polymers are made from renewable or recycled raw
                materials.
              </p>
              <button className="but" type="button">
                Read More
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/economy/article6">
              <img src={imag6} className="piv" />
              <h2>Little chance of falling into a recession</h2>
              <p>
                The U.S. economy has little chance of falling into a recession
                this year or next unless the Federal Reserve raises interest
                rates more than they are currently projecting, according to a
                new forecast released yesterday at the 13th annual Inland Empire
                Economic Forecast Conference, hosted by the UC Riverside School
                of Business.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>{" "}
            </a>
          </div>
        </div>
        <center>
          <div class="bor">
            <YoutubeEmbedEconomy embedId="rokGy0huYEA" />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Economy;
