import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import image1 from "./images/augmen.png";
import image2 from "./images/Russia.png";
import image3 from "./images/mentalHel.png";
import Weather from "./weather.js";
import YoutubeEmbedMain from "./YoutubeEmbedMain.js";

import "./images.css";
import pic1 from "./images/covid.jpg";
import pic2 from "./images/diabetes.jpg";
import pic3 from "./images/influenza.jpg";
import pic4 from "./images/cricketpsy.jpg";
import pic5 from "./images/football.jpg";
import pic6 from "./images/golf.jpg";
import pic7 from "./images/SUSTAINABILITY.jpg";
import pic8 from "./images/currency.jpg";
import pic9 from "./images/slowd.jpg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const fadeImages = [image1, image2, image3];
const description = ["News1", "News2", "News3"];
const Slideshow = () => {
  const d = new Date();
  const [message, setMessage] = useState("");
  const userSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "User name too less")
      .max(15, "Very Large Name")
      .required("Username is mandatory"),
    emailid: Yup.string()
      .email("invalid email format")
      .required("Email id missing")
  });
  return (
    <div>
      <div className="slideflex">
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <br />
                <div className="image-container">
                  <img style={{ width: "100%" }} src={fadeImage} alt="" />
                </div>
              </div>
            ))}
          </Fade>
        </div>
        <div className="promoflex">
          <div className="promo">
            <center>
              <h2>WATCH NOW</h2>

              <YoutubeEmbedMain />
            </center>
          </div>
        </div>
      </div>

      <div className="latest">
        <div className="latestnews">
          <h2>LATEST:</h2>
          <h5>{d.toString()}</h5>
          <p>
            The importance of sponsorship in sports are becoming a very vital
            parts in all the worldcups , as many of the top rated industries are
            upgrading their bussiness using it . It is also a major income
            source for the board of cricket of all countries . As this is the
            worldcup season the sponsorships has doubled since the last season
            ......
          </p>
          <a href="/latest">
            <button className="but" type="button">
              {" "}
              Read More{" "}
            </button>
          </a>
        </div>
        <div className="youtuimg">
          <Weather />
        </div>
      </div>
      <br />
      <div className="newscontainer">
        <div className="newssec">
          <div>
            <center>
              <h1>HEALTH</h1>
            </center>
            <div className="newsfeed">
              <div className="sample">
                <a href="/health/article1">
                  <img src={pic1} style={{ width: "100%" }} />
                  <h2>The impact of COVID-19 on research</h2>
                </a>
              </div>
              <div className="sample">
                <a href="/health/article2">
                  <img src={pic2} style={{ width: "100%" }} />
                  <h2>
                    Current Treatment Options for Type 2 Diabetes Mellitus in
                    Youth.
                  </h2>
                </a>
              </div>
              <div className="sample">
                <a href="/health/article3">
                  <img src={pic3} style={{ width: "100%" }} />
                  <h2>
                    One-step immunoassay without washing steps for influenza A
                    virus detection using ISFET
                  </h2>
                </a>
              </div>
            </div>
          </div>
          <div>
            <center>
              <h1>SPORTS</h1>
            </center>
            <div className="newsfeed">
              <div className="sample">
                <a href="/sports/article1">
                  <img src={pic4} style={{ width: "100%" }} />
                  <h2>Physiological requirements of cricket</h2>
                </a>
              </div>
              <div className="sample">
                <a href="/sports/article2">
                  <img src={pic5} style={{ width: "100%" }} />
                  <h2>Match analysis in football: a systematic review</h2>
                </a>
              </div>
              <div className="sample">
                <a href="/sports/article3">
                  <img src={pic6} style={{ width: "100%" }} />
                  <h2>The frequency of golf injuries.</h2>
                </a>
              </div>
            </div>
          </div>
          <div>
            <center>
              <h1>ECONOMY</h1>
            </center>
            <div className="newsfeed">
              <div className="sample">
                <a href="/economy/article1">
                  <img src={pic7} style={{ width: "100%" }} />
                  <h2>Creation of India as a Sustainable Economy</h2>
                </a>
              </div>
              <div className="sample">
                <a href="/economy/article2">
                  <img src={pic8} style={{ width: "100%" }} />
                  <h2>The world’s currencies are falling against the dollar</h2>
                </a>
              </div>
              <div className="sample">
                <a href="/economy/article3">
                  <img src={pic9} style={{ width: "100%" }} />
                  <h2>Leadership and Satisfaction in Athletics</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="formsub">
          <div>
            <Formik
              initialValues={{
                username: "",
                emailid: ""
              }}
              validationSchema={userSchema}
              onSubmit={(val, { resetForm }) => {
                setMessage("Details Submitted");
              }}
            >
              <center>
                <h4>Subscribe For Early Articles</h4>
                <Form>
                  <h5>Name:</h5>
                  <Field type="text" name="username" />
                  <h5>Email:</h5>
                  <Field type="email" name="emailid" />
                  <br />
                  <br />
                  <label>
                    <Field type="radio" name="request" />
                    Yes, I want to be mailed Regarding Ads
                  </label>
                  <br />
                  <br />
                  <label>
                    <Field type="radio" name="request" />
                    No, I dont want to be mailed Regarding Ads
                  </label>
                  <br />
                  <br />
                  <Field
                    type="submit"
                    value="Subscribe"
                    className="submitbutton"
                  />
                </Form>
                <br />
                <div style={{ color: "red", fontWeight: "bold" }}>
                  <ErrorMessage name="username" />
                </div>
                <br />
                <div style={{ color: "red", fontWeight: "bold" }}>
                  <ErrorMessage name="emailid" />
                </div>
                <h4 style={{ color: "green" }}>{message}</h4>
              </center>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
