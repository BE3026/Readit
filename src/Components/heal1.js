import React from "react";
import img from "./images/covid.jpg";
import News from "./news.js";
import "./images.css";
import pict1 from "./images/covid1.jpg";
import YoutubeEmbedHeal from "./YoutubeEmbedHeal.js";
function heal1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>The impact of COVID-19 on research</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pict1} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          In this article, we offer some initial examination on how Covid-19
          pandemic can influence the developments of CSR and marketing. We argue
          that Covid-19 pandemic offers a great opportunity for businesses to
          shift towards more genuine and authentic CSR and contribute to address
          urgent global social and environmental challenges. We also discuss
          some potential directions of how consumer ethical decision making will
          be shifted to due to the pandemic. In our discussion of marketing, we
          outline how we believe marketing is being affected by this pandemic
          and how we think this will change, not only the context of marketing,
          but how organizations approach their strategic marketing efforts. We
          end the paper with a identifying a number of potentially fruitful
          research themes and directions.
          <h2>Research</h2>
          The impact on research in progress prior to COVID-19 was rapid,
          dramatic, and no doubt will be long term. The pandemic curtailed most
          academic, industry, and government basic science and clinical
          research, or redirected research to COVID-19. Most clinical trials,
          except those testing life-saving therapies, have been paused, and most
          continuing trials are now closed to new enrollment. Ongoing clinical
          trials have been modified to enable home administration of treatment
          and virtual monitoring to minimize participant risk of COVID-19
          infection, and to avoid diverting healthcare resources from pandemic
          response. In addition to short- and long-term patient impact, these
          research disruptions threaten the careers of physician-scientists,
          many of whom have had to shift efforts from research to patient care.
          To protect research in progress, as well as physician-scientist
          careers and the research workforce, ongoing support is critical. NIH
          (https://grants.nih.gov/policy/natural-disasters/corona-virus.htm),
          PCORI
          (https://www.pcori.org/funding-opportunities/applicant-and-awardee-faqs-related-covid-19),
          and other funders acted swiftly to provide guidance on proposal
          submission and award management, and implement allowances that enable
          grant personnel to be paid and time lines to be relaxed. Research
          institutions have also implemented strategies to mitigate the
          long-term impact of research disruptions. Support throughout and
          beyond the pandemic to retain currently well-trained research
          personnel and research support teams, and to accommodate loss of
          research assets, including laboratory supplies and study participants,
          will be required to complete disrupted research and ultimately enable
          new research. In the long term, it is likely that the pandemic will
          force reallocation of research dollars at the expense of research
          areas funded prior to the pandemic. It will be more important than
          ever for the pediatric research community to engage in discussion and
          decisions regarding prioritization of funding goals for dedicated
          pediatric research and meaningful inclusion of children in studies.
          The recently released 2020 National Institute of Child Health and
          Development (NICHD) strategic plan that engaged stakeholders,
          including scientists and patients, to shape the goals of the
          Institute, will require modification to best chart a path toward
          restoring normalcy within pediatric science.
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

            <YoutubeEmbedHeal />
          </div>
        </center>
      </div>
    </div>
  );
}

export default heal1;
