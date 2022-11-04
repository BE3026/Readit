import React from "react";
import ReactDOM from "react-dom/client";
import pict from "./images/imgq.jpg";
import "./health.css";
import YoutubeEmbedHealth from "./YoutubeEmbedHealth";
import "./YoutubeEmbedHealth.css";
import img2 from "./images/diabetes.jpg";
import img1 from "./images/covid.jpg";
import img3 from "./images/influenza.jpg";
import img4 from "./images/neonatal.jpg";
import img5 from "./images/drug.jpg";
import img6 from "./images/medical1.jpg";

function Health() {
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
          HEALTH
        </h1>{" "}
      </center>
      <div className="maincontt">
        <div className="content">
          <div className="example">
            <a href="/health/article1">
              <img src={img1} className="piv" />
              <h2>The impact of COVID-19 on research</h2>
              <p>
                Coronavirus disease 2019 (COVID-19) has swept across the globe
                causing hundreds of thousands of deaths, shutting down
                economies, closing borders and wreaking havoc on an
                unprecedented scale. It has strained healthcare services and
                personnel to the brink in many regions and will certainly deeply
                mark medical research both in the short and long-term.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/health/article2">
              <img src={img2} className="piv" />
              <h2>
                Current Treatment Options for Type 2 Diabetes Mellitus in Youth:
                Today’s Realities and Lessons from the TODAY Study
              </h2>
              <p>
                Contamination of automated surgical equipment is a potential
                source of postoperative endophthalmitis. The effect of
                disinfecting the unsterile vacuum control manifold (VCM) on
                contamination of the aspiration fluid was studied.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/health/article3">
              <img src={img3} className="piv" />
              <h2>
                One-step immunoassay without washing steps for influenza A virus
                detection using ISFET
              </h2>
              <p>
                A one-step immunoassay for influenza A virus detection was
                developed using two different microbeads and a filter-inserted
                bottle. Two bead types with diameters of 15 (capture bead) and 3
                (detection bead) μm were prepared to specifically detect
                influenza A virus. Anti-influenza A virus antibodies were coated
                on both bead types, whereas urease was .........
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>
            </a>
          </div>
          <div className="example">
            <a href="/health/article4">
              <img src={img4} className="piv" />
              <h2>
                An Unknown Fact of Well Knowns: The Effect of Neonatal
                Hyperbilirubinemia on Ventricular Functions
              </h2>
              <p>
                Unconjugated hyperbilirubinemia(UCH) is a common systemic
                disease in the neonate. Many researches on etiology, risk
                factors and treatment have been done and guidelines have been
                drawn up. Because it is a systemic disease, it affects the body,
                organelle, cells, organs and systems.
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>{" "}
            </a>
          </div>
          <div className="example">
            <a href="/health/article5">
              <img src={img5} className="piv" />
              <h2>
                A Cooperative Model to Improve Hospital Equipments and Drugs
                Management
              </h2>
              <p>
                The cost of services provided by public and private healthcare
                systems is nowadays becoming critical. This work tackles the
                criticalities of hospital equipments and drugs management by
                emphasizing its implications on the whole healthcare system
                efficiency. The work presents a multi-agent based model for
                decisional cooperation
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>{" "}
            </a>
          </div>
          <div className="example">
            <a href="/health/article6">
              <img src={img6} className="piv" />
              <h2>The Evolution of Medical Uncertainty</h2>
              <p>
                Modern developments of scientific medicine have uncovered and
                created uncertainties and risks that were previously not known
                or experienced; the stakes have become very much higher. The
                rise in public expectations, however, is paralleled by a lowered
                tolerance of uncertainty. Metaphors of "deliverance" and
                "disaster" abound in discussions of scientific discovery,
                reflecting differing conceptions and philosophies about errors
                and mistakes, and the role they play in the physical universe
                ......
              </p>
              <button className="but" type="button">
                {" "}
                Read More{" "}
              </button>{" "}
            </a>
          </div>
        </div>
        <center>
          <div className="bor">
            <YoutubeEmbedHealth embedId="rokGy0huYEA" />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Health;
