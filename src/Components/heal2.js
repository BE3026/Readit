import React from "react";
import img from "./images/covid.jpg";
import News from "./news.js";
import "./images.css";
import pict1 from "./images/ty2d.jpg";
import YoutubeEmbedHeal from "./YoutubeEmbedHeal1.js";
function heal2() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>
          Current Treatment Options for Type 2 Diabetes Mellitus in Youth:
          Today’s Realities and Lessons from the TODAY Study
        </h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pict1} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h3>Introduction</h3>
          The incidence of type 2 diabetes in children and adolescents has
          increased over the last 2 decades, paralleled by an increase in
          obesity over the same time period. Although the value of lifestyle
          modification in obese youth is unquestioned, scant evidence for
          optimal treatment of type 2 diabetes in this age group exists. Despite
          recent therapeutic drug trials, metformin and insulin are the only
          medicines currently approved by the U.S. Food and Drug Administration
          for the treatment of type 2 diabetes in youth. Because of recently
          amended pharmaceutical regulations, however, it is likely that more
          antidiabetic medications soon will be added to the armamentarium of
          therapeutic options for youth with type 2 diabetes. Additionally, the
          recently published TODAY study comparing safety and efficacy of three
          treatment regimens in maintaining glycemic control in youth with type
          2 diabetes has shed new light on the problem.
          <br />
          <br />
          <h3>Epidemiology of Type 2 diabetes in Youth</h3>
          As noted, the incidence and prevalence of type 2 diabetes in children
          and adolescents have increased, compared to just a few decades ago,
          especially in certain racial/ethnic populations [9, 10]. Estimates
          indicate that 8–45% of cases of recently diagnosed diabetes in
          children and adolescents are due to type 2 diabetes [4]. The SEARCH
          for Diabetes in Youth Study from the United States estimated the
          prevalence of type 2 diabetes as 0.22 cases per 1000 persons under the
          age of 20 years [9]. The same report indicated that type 2 diabetes
          was rare even today in young children, but became much more prevalent
          after the age of 10 years, especially in children of certain
          racial/ethnic groups (e.g. Native American, Blacks, Hispanics, and
          Asian-Pacific Islanders). The highest prevalence in youth coincided
          with adolescence (0.42 cases per 1000 in children 10 to 19 years of
          age) [9]. The SEARCH for Diabetes in Youth Study observed
          physician-diagnosed type 2 diabetes in 6 centers and reported an
          incidence of 8.1 and 11.8 cases per 100,000 person years in children
          age 10–14 and 15–19 years, respectively [10]. The rates varied
          significantly based on the ethnic subgroup, with the lowest rate among
          non-Hispanic Caucasians and the highest among Native American youth
          [10].
          <br />
          <br />
          <h3>Risk Factors for Type 2 Diabetes in Youth</h3>
          Type 2 diabetes in children and adolescents is a new disease that has
          emerged over the last 2–3 decades [1–3]. Prior to this rise, almost
          all children and adolescents with diabetes were diagnosed with type 1
          diabetes mellitus, with type 2 diabetes accounting for only a tiny
          fraction of all new cases of diabetes in this age group [4, 5]. Type 2
          diabetes is a chronic, progressive state of beta cell dysfunction
          characterized by insulin resistance and hyperglycemia. Prediabetic
          states (Impaired Fasting Glucose – IFG /and Impaired Glucose tolerance
          - IGT) are typically present prior to the diagnosis of type 2
          diabetes, and lead to frank diabetes in affected children [6, 7].
          Although reliable data are scarce due to the recent appearance of this
          disease in youth, the risk of diabetes-related complications is
          expected to be high in the years and decades to come [8].
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

export default heal2;
