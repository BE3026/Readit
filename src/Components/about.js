import React from "react";
import "./images.css";
import bharath from "./bharath.jpg";
import linkedin from "./linkedin.png";
import github from "./github.png";
import snowlin from "./snowlin.jpg";
function About() {
  return (
    <div className="aboutcontainer">
      <div className="aboutcontent">
        <center>
          <img
            src={bharath}
            style={{
              marginTop: "-50px",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: "4px solid brown"
            }}
          />
        </center>
        <h3>Bharath Eswar</h3>
        <p>
          Hello guys ! This is Bharath Eswar . I am on 3rd year computer science
          and engineering at sathyabama institute of science of technology . I
          am a full stack development enthusiast . I am also interested in Data
          Science and Machine Learning .
        </p>
        <br />
        <br />
        <center>
          <a href="https://www.linkedin.com/in/bharath-eswar-a34ba6204/">
            <img src={linkedin} style={{ width: "10%" }} />
          </a>
          <a href="https://github.com/BE3026">
            <img src={github} style={{ width: "10%", marginLeft: "20px" }} />
          </a>
        </center>
      </div>
      <div className="aboutcontent">
        <center>
          <img
            src={snowlin}
            style={{
              marginTop: "-50px",
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              border: "4px solid brown"
            }}
          />
        </center>
        <h3>Snowlin Paz David</h3>
        <p>
          Hello guys ! This is Snowlin Paz David . I am on 3rd year computer
          science and engineering at sathyabama institute of science of
          technology . I am a front-end development enthusiast . I am also
          interested in UI/UX,event management and good in designing.
        </p>
        <br />
        <br />
        <center>
          <a href="https://www.linkedin.com/in/snowlin-paz-david-940367210/">
            <img src={linkedin} style={{ width: "10%" }} />
          </a>
          <a href="https://github.com/SnowlinPazDavid">
            <img src={github} style={{ width: "10%", marginLeft: "20px" }} />
          </a>
        </center>
      </div>
    </div>
  );
}

export default About;
