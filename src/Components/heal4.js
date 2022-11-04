import React from "react";
import pict4 from "./images/neo.jpg";
import News from "./news.js";
import "./images.css";
import pict1 from "./images/covid1.jpg";
import YoutubeEmbedHeal from "./YoutubeEmbedHeal3.js";
function heal1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>
          An Unknown Fact of Well Knowns: The Effect of Neonatal
          Hyperbilirubinemia on Ventricular Functions
        </h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pict4} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          Unconjugated hyperbilirubinemia(UCH) is a common systemic disease in
          the neonate. Many researches on etiology, risk factors and treatment
          have been done and guidelines have been drawn up. Because it is a
          systemic disease, it affects the body, organelle, cells, organs and
          systems. Researchers have also done a lot of researches to clarify
          which levels, which mechanisms, and which organs the unconjugated
          bilirubin effects. We aimed to investigate the effects of high
          unconjugated bilirubin levels on left and right ventricular systolic
          and diastolic functions in newborns by echocardiography and doppler.
          <h2>Effects </h2>
          There are limited data on reference values of left atrial volume
          indexes (LAVIs) in adults without known cardiovascular disease or risk
          factors, as well as their stratification by age, gender, and diastolic
          stage. LAVIs were calculated using the biplane area-length method in
          accordance with guidelines in 966 consecutive patients (mean age 48.0
          ± 15.7 years) with no known cardiovascular disease or risk factors,
          with preserved left ventricular systolic function and normal or grade
          I diastolic dysfunction (DD). The mean LAVI was 23 ± 8 ml/m2. Using a
          conventional cut-off value of 34 ml/m2 (mean + 2 SDs of the values
          derived from the guidelines) to define abnormal LAVI would label about
          10% of patients as having dilated left atria and structural heart
          disease, whereas using the American Society of Echocardiography's
          recommended cutoff of the mean + 1 SD (i.e., 28 ml/m2) would do so for
          up to about 20%. The mean LAVI was similar between the genders (p =
          0.10) and among different age groups (p = 0.60 for the trend across
          decades). Finally, when stratified by diastolic function, the mean
          LAVIs were 23.2 ± 8.3 and 22.2 ± 8.7 ml/m2 for patients with normal (n
          = 653) and grade I DD (n = 313), respectively (p = 0.10). In
          conclusion, in this cohort of patients without known cardiovascular
          disease or risk factors, the cut-off values for abnormal LAVI were
          greater than those adopted in the guidelines. There was no variation,
          however, by gender, age, or grade I DD, although subjects with
          long-standing grade I DD and/or high filling pressures were likely
          underrepresented.
          <h2>Impact of Left Ventricular Diastolic Property </h2>
          Diastolic dysfunction has been linked to 2 epidemics: atrial
          fibrillation (AF) and heart failure. The presence and severity of
          diastolic dysfunction are associated with an increased risk for first
          AF and first heart failure in patients with sinus rhythm. Furthermore,
          the risk for heart failure is markedly increased once AF develops. The
          evaluation of diastolic function once AF has developed remains a
          clinical challenge. The conventional use of Doppler echocardiography
          for the assessment and grading of diastolic dysfunction relies heavily
          on evaluating the relation of ventricular and atrial flow
          characteristics. The mechanical impairment of the left atrium and the
          variable cycle lengths in AF render the evaluation of diastolic
          function difficult. A few Doppler echocardiographic methods have been
          proved clinically useful for the estimation of diastolic left
          ventricular filling pressures in AF, but these appear to be
          underutilized. Several innovative methods are emerging that promise to
          provide greater precision in diastolic function assessment, but their
          clinical utility in AF remains to be established. In conclusion, this
          review provides an up-to-date discussion of the evaluation of
          diastolic function assessment in AF and how it may be important in the
          clinical management of patients with AF.
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
