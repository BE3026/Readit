import React from "react";
import pict3 from "./images/inf.jpg";
import News from "./news.js";
import "./images.css";
import pict1 from "./images/covid1.jpg";
import YoutubeEmbedHeal from "./YoutubeEmbedHeal2.js";
function heal1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>
          One-step immunoassay without washing steps for influenza A virus
          detection using ISFET
        </h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pict3} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>A one-step immunoassay for influenza A virus
          detection was developed using two different microbeads and a
          filter-inserted bottle. Two bead types with diameters of 15 (capture
          bead) and 3 (detection bead) μm were prepared to specifically detect
          influenza A virus. Anti-influenza A virus antibodies were coated on
          both bead types, whereas urease was immobilized only on the detection
          bead. An influenza A-positive sample could form a sandwich complex
          with the capture and detection beads; this complex would not pass
          through the filter, which had a controlled pore size. As the detection
          bead was used at a limiting concentration, it would be prevented from
          crossing the filter; thus, it would further react with the substrate
          urea and consequently increase the pH. An influenza A-negative sample
          would fail to form the sandwich complex in the presence of the capture
          and detection beads. Accordingly, the detection bead would pass
          through the filter into the urea buffer and increase the pH. The pH
          change in the urease reaction could be quantitatively measured by an
          indicator such as phenol red or using ion-selective field-effect
          transistor (ISFET). This one-step immunoassay was used for the
          detection of influenza A virus in real samples. The receiver operating
          characteristic (ROC) plot analysis showed an area under the curve
          (AUC) value of 0.931; the sensitivity and specificity of the assay was
          80% and 90%, respectively, at a cutoff value of 0.9986. These results
          demonstrate that the one-step immunoassay could increase the
          sensitivity of influenza A virus detection in real samples.
          <h2>Influenza A</h2>
          Amantadine and rimantadine have been efficacious for the prevention
          and treatment of influenza A virus infections in young healthy
          adults.5,45,56 A systematic review of published studies in children
          and the elderly concluded that available data only demonstrate
          amantadine prophylactic efficacy and a modest therapeutic effect in
          children.57 In the elderly, no data were available to support a
          conclusion of prophylactic or therapeutic efficacy of either
          adamantane. The emergence of widespread and nearly complete amantadine
          resistance among influenza A(H3N2) isolates,27 as well as the
          amantadine resistance of the pandemic A(H1N1)pdm09 strain, precludes
          the empirical use of adamantanes for management of untyped influenza A
          outbreaks. Amantadine and rimantadine, both at a dosage of 200 mg/day
          in adults, are about 70% to 90% protective against clinical illness
          caused by various susceptible influenza A subtypes, including
          susceptible pandemic strains.58 Prophylaxis is effective in preventing
          nosocomial influenza and possibly in curtailing nosocomial outbreaks
          caused by such strains. Protection seems to be additive to that
          provided by vaccine.59
          <h2>Rimantadine</h2>
          Rimantadine was less effective than zanamivir in reducing cases of
          influenza A illness in adults in a long-term care facility.60 The
          difference in protective efficacy was largely due to the emergence of
          rimantadine-resistant viruses that caused rimantadine prophylactic
          failure; no zanamivir-resistant viruses were isolated. Rimantadine
          administration to school-age children (5 mg/kg/day) decreased the risk
          for influenza A illness in recipients and possibly in their family
          contacts. Postexposure prophylaxis with these drugs provided
          inconsistent protection to family contacts, however, in part depending
          on whether ill index children were treated.20 A dosage of 100 mg/day
          seems to protect against influenza A illness and is well tolerated in
          adults.61 Amantadine and rimantadine are also effective therapies for
          uncomplicated adamantane-susceptible influenza A illness in healthy
          adults,5,23 but it is uncertain whether treatment reduces the risk for
          complications in high-risk patients or is useful in patients with
          established pulmonary complications. Early treatment in ambulatory
          adults (200 mg/day for 5 days) reduces the duration of fever and
          systemic complaints by 1 to 2 days, decreases virus shedding, and
          shortens time to resumption of usual activities.23 In illness caused
          by H3N2-subtype influenza viruses, certain abnormalities of peripheral
          airways function, but not of airway hyperreactivity, resolve more
          quickly in amantadine-treated patients. Amantadine or rimantadine
          treatment in adults with leukemia or stem cell transplantation may
          reduce the risk for pneumonia,62 but more recent data suggest that in
          stem cell transplant recipients, early NAI therapy may be preferred to
          adamantanes because it may prevent progression to pneumonia and
          decrease viral shedding, thereby possibly preventing both
          influenza-related death in index patients and nosocomial transmission
          to others.63 In children, rimantadine treatment is associated with
          lower symptom burden, fever, and viral titers during the first 2 days
          of treatment compared with acetaminophen administration, but
          rimantadine-treated children have more prolonged shedding of virus.
          Treatment generally does not seem to affect immune responses to
          infection but may blunt secretory antibody levels.64
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
