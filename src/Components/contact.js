import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./images.css";
function Contact() {
  return (
    <div className="contactform">
      <h1
        className="titlename"
        style={{ textAlign: "center", color: "#044269" }}
      >
        Wanna Get In Touch With Us{" "}
      </h1>
      <form>
        <div>
          <p>
            We appreciate your interest in readit . We'd love to hear from you .
            Here's how you can reach us...
          </p>
          <h3>Name:</h3>
          <input className="inp" type="text" name="username" />
          <h3>Email:</h3>
          <input className="inp" type="email" name="emailid" />
          <br />
          <br />
          <h3>Comments:</h3>
          <textarea name="comments" type="text" rows="10" cols="66" />
          <br />
          <br />

          <input type="submit" value="Submit" className="submitbutton" />
        </div>
      </form>
      <br />
    </div>
  );
}

export default Contact;
