import React from "react";
import img from "./images/covid.jpg";
import News from "./news.js";
import "./images.css";
import pictu1 from "./images/sponsor.jpg";
import YoutubeEmbedHeal from "./YoutubeEmbedHeal.js";
function heal1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>Rise Of Sponsorships in Sports</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pictu1} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          According to the Market Statsville Group (MSG), theglobal sports
          sponsorship market size is projected to register a CAGR of 7.5% to
          reach USD 112.2 billion by 2030 from USD 64.8 billion in 2021. Sports
          sponsoring is financial support for a game by a person or by an
          organization for mutual benefit. Sponsoring takes place at all levels
          of sports. For instance, athletes can be given large sums of money for
          particular sportswear or branded equipment, or school teams can have a
          sponsored team. Sports sponsorships can be seen in various ways, such
          as the brand logo printed on a sports team’s jersey. Sports
          sponsorship has benefits such as raising awareness of the company or
          brand, advertising products and services, providing rewards or
          incentives for staff and customers, enhancing revenue or sales through
          improved media exposure, increasing brand loyalty/premium prices, and
          decreasing tax through tax relief. Request for a sample report here:
          https://www.marketstatsville.com/request-sample/sports-sponsorship-market
          <h2>Global Sports Sponsorship Market Dynamics</h2>
          The growing number of sporting events, as well as the fact that
          sponsorships have a wider reach than traditional marketing methods
          such as advertising and sales promotions, are expected to boost the
          sports sponsorship market in the coming years. The increasing
          popularity of sports and demand for online sports by viewers is
          anticipated to increase the demand for sports sponsorship during the
          study period. Further, esports popularity is incrasing day by day.
          E-sports is an electronic sports, which includes PC, tables and mobile
          games. Due to the high popularity of the esports events among gamers
          and spectators, the Esports sector is becoming profitable. Several
          universities and colleges are offering scholarships and even esport
          courses. So that gamers can have a opportunity to pursue e-sports as a
          professional career.
          <h2>Sponsorships</h2>
          Based on the regions, the global sports sponsorship market has been
          segmented across North America, Asia-Pacific, Europe, South America,
          and the Middle East & Africa. Globally, Asia Pacific is estimated to
          hold the highest CAGR in the global sports sponsorship market during
          the forecast period. India is the fastest-growing region in the Asia
          Pacific, especially in e-sports. Recently, BGMI game developer Krafton
          has named iQoo as the title sponsor. The company has agreed to be a
          title sponsor for four tournaments, namely BMOC – Battlegrounds Mobile
          India Open Challenge 2022, BMPS – Battlegrounds Mobile India Pro
          Series 2022 Season 1, BGIS – Battlegrounds Mobile India Series 2022,
          BMPS – Battlegrounds Mobile India Pro Series 2022 Season. Moreover, In
          January 2022, Tata took over title sponsorship from the Vivo of IPL
          (Indian Premium League). The Tata group inked an agreement with BCCI
          (Board of Control for Cricket in India) for IPL title sponsorship for
          the 2022 and 2023 seasons. As per the reports, Tata Group has paid
          nearly USD 86.5 million for the title sponsorship. Request For Report
          Description:
          https://www.marketstatsville.com/sports-sponsorship-market
        </p>
      </div>
      {/* <div className="promo" style={{ height: "500px" }}> */}
      <div className="video">
        <h3
          style={{
            textAlign: "center",

            fontSize: "22px"
          }}
        >
          Recommended Videos{" "}
        </h3>
        <p style={{ textAlign: "center", fontSize: "20px" }}>To Watch</p>
        <YoutubeEmbedHeal />
      </div>
    </div>
  );
}

export default heal1;
