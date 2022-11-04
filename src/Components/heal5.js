import React from "react";
import pict5 from "./images/dru.jpg";
import News from "./news.js";
import "./images.css";
import pict1 from "./images/covid1.jpg";
import YoutubeEmbedHeal from "./YoutubeEmbedHeal4.js";
function heal1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>
          A Cooperative Model to Improve Hospital Equipments and Drugs
          Management
        </h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={pict5} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          The cost of services provided by public and private healthcare systems
          is nowadays becoming critical. This work tackles the criticalities of
          hospital equipments and drugs management by emphasizing its
          implications on the whole healthcare system efficiency. The work
          presents a multi-agent based model for decisional cooperation in order
          to address the problem of integration of departments, wards and
          personnel for improving equipments, and drugs management. The proposed
          model faces the challenge of (i) gaining the benefits deriving from
          successful collaborative models already used in industrial systems and
          (ii) transferring the most appropriate industrial management practices
          to healthcare systems. Literature review confirms that several studies
          address management issues al-though many gaps need to be bridged, for
          instance with respect to integrated logistics of healthcare systems.
          De Angelis et al. [6] investigate the problem of assigning re-sources
          and servers (e.g., doctors, beds, instruments) to services.
          <h2>Resource Management in Healthcare Systems </h2>
          Akcali etal. [7] tackle the problem of optimizing hospital bed
          capacity planning through a network flow approach. Harper [1] proposes
          an integrated simulation tool (PROMPT, Patient and Resource
          Operational Management Planning Tool) for the planning and man-agement
          of hospital resources such as beds, operating theatres, and needs for
          nurses, doctors and anaesthetists. Van Merode et al. [8] study the
          potential adoption of Enter-prise Resource Planning (ERP) systems in
          hospitals while facing the issues of plan-ning and control processes
          and determining ERP systems requirements. Liu et al. [9] and De
          Treville et al. [10] argue that efficiency and quality of healthcare
          management have been enhanced by the computerization of healthcare
          information. Several studies concern the information management,
          workflow (see [11]) and automation in health-care systems. Thornett
          [12] discusses potential roles, introduction benefits and
          diffi-culties related to computer decision support systems within the
          practice in primary healthcare. It can be concluded that
          organizational innovations and enabling ICT-based solutions are
          essential conditions to reach the efficiency and effectiveness
          im-provement in hospital operations management.
          <h2>Applications </h2>
          Very promising technological enablers for effectively managing, even
          in real time, particular products or systems (equipment, medical
          devices, drugs) are the Radio Frequency Identification (RFId)
          technologies. The introduction in healthcare struc-tures of a
          pervasive technology such as the RFId with complementary decision
          tools likely entails the redesign of key logistic processes as
          described in this work. On the other hand the presence of RFId
          technologies raises the complexity of the system. In fact, together
          with the introduction of RFId different critical issues must be
          resolved or managed such as privacy management and signal transmission
          interferences. The tracking points for deliveries and material
          consumption are detailed in the collabora-tive procurement procedures.
          In order to enable physical tracking and localization, RFId technology
          can be used in combination with automatic delivery devices. Auto-matic
          delivery devices impose the authentication and enable the tracking of
          the deliv-ery. Moreover, introducing the prescription of the doctors
          in the hospital information system, it is possible to perform a
          crosscheck between the prescribed drugs and the drug quantities that
          have been taken from the stores. Overall, three main areas of
          application of the system have been identified: (i) drugs procurement,
          (ii) equipment management, (iii) human resource scheduling. The
          application to drugs procurement allows the improvement of the FIFO
          material management strategy and effective use of decentralized
          warehouses. When the requests arrive to DM, the drugs manager verifies
          the stocks and propose different delivery options based on the expiry
          dates, distance from the warehouses, lead-time of procurement from
          suppliers.
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
