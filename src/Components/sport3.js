import React from "react";

import News from "./news.js";
import "./images.css";
import YoutubeEmbedSpo3 from "./YoutubeEmbedSpo3.js";
import photo3 from "./images/gol.jpg";

function sport3() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>The frequency of golf injuries.</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={photo3} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          About 55 million people in 206 countries worldwide play golf, making
          it one of the most popular sports in the world.1 With this many
          participants, injuries are bound to happen and understanding how and
          why these injuries happens is crucial to recovery and getting back out
          on the course injury-free. It has been reported that there is a
          lifetime injury incidence between 25.2% and 67.4% in adult amateur
          golfers.2 In other words, up to ⅔ of golfers may experience some type
          of injury at some point in their playing career. In professional golf,
          these men and women are playing more frequently and more often, and as
          a result, they are injured more frequently – with annual injury rates
          in this population between 31.0% and 90.0%!3 The spine, and in
          particular the low back, account for the greatest overall incidence of
          injury in amateur golfers at a rate of 18.3–36.4%.4 While an injury
          can happen to any body part while playing golf, the elbow (8.0–33.0%),
          the wrist and hand (10.0–32%), and the shoulder (4.0–18.6%) are other
          frequently injured anatomical regions in amateur golfer. We will
          discuss each body region in detail and the impact golf has on each
          injury.
          <h2>Lower back pain</h2>
          Despite being viewed in the general public’s eye as a ‘casual’ sport,
          the truth behind the golf swing is that it is a dynamic, explosive,
          and powerful movement, especially for the spine and low back. In fact,
          researchers have studied golfers in a lab and found compression loads
          of up to 8x a person’s body weight, or about 6,100 Newtons, during the
          golf swing.5 For comparison, a study by the same authors using similar
          techniques measured lumbar compression forces in Division 1-A college
          football linemen to be about 8,679 N when hitting a blocking sled.6
          Now, imagine that load on the spine 70-85 times throughout the course
          of a full round of golf, and it’s no wonder low back pain is the
          number one injury experienced by golfers! The joints of the lumbar
          spine, also known as facets, are oriented in a fashion that allows us
          to bend and extend our low back very well, but they limit the amount
          of rotation and lateral bending we are able to achieve. Inherently,
          the golf swing, which is multiplanar in nature, forces the athlete to
          move into restrictions of motion that are unnatural for the lumbar
          spine. So, how do we achieve the motion necessary to perform a proper
          backswing and follow through without putting undue stress on the low
          back? Other parts of our body have to move efficiently and
          effectively, namely the hips, thoracic spine (mid back), and
          shoulders. Studies show that side-to-side differences in hip internal
          rotation range of motion was more likely to occur in those with low
          back pain, with those having low back pain demonstrating reduced
          motion in the lead hip.7 For example, if a right handed golfer is
          unable to effectively internally rotate their lead hip (left hip)
          during the downswing and follow through, the lumbar spine has to go
          into greater rotation in order for the golfer to achieve an effective
          shot. Given the high loads placed on the spine during a “normal” swing
          (discussed above), any compensation or deviation that increases stress
          and strain can quickly become a problem.
          <h2>Downswing and Follow Through</h2>
          During the downswing and follow through phase of the golf swing there
          is increased lateral bending towards the trailing side (right side for
          a right handed golfer). As the golfer attempts to generate more force
          behind the ball at impact, there is increased side bending of the
          spine. The amount of lateral bending can be measured both directly and
          through the ‘‘crunch factor.’’ Its clinical application is
          controversial because of lack of supporting evidence, but it is
          defined as the product of the lumbar lateral bending angle and axial
          rotation velocity.10 The “crunch factor” is basically a term used in
          research studies and in labs that look at how lateral bending and
          rotation affect a golfer’s lower back. It is described as the
          combination of side bending and rotation during the downswing phase of
          the swing.11 When you consider the rapid stress to the trailing side
          of the lower back (as seen in the figure above), it makes sense that
          the joints of the lower back and trailing side undergo high levels of
          stress, creating a potential source for back pain in the golfing
          community.
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

            <YoutubeEmbedSpo3 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default sport3;
