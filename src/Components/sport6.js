import React from "react";

import News from "./news.js";
import "./images.css";
import photo6 from "./images/ath.jpg";
import YoutubeEmbedSpo6 from "./YoutubeEmbedSpo6.js";
function heal1() {
  const d = new Date();
  return (
    <div className="articlecontainer">
      <div className="article">
        <h2>Leadership and Satisfaction in Athletics</h2>
        <p>By Snowlin Paz david</p>
        <b>{d.toString()}</b>
        <br />
        <br />
        <img src={photo6} style={{ marginRight: "300px" }} />
        <br />
        <p>
          <h2>Introduction</h2>
          This study investigated (a) the differences between the offensive and
          defensive personnel of football teams in preferred leadership,
          perceived leadership, and satisfaction with leadership, and (b) the
          relationships among preferred and perceived leadership, their
          congruence, and satisfaction with leadership. The study employed
          hierarchical regression procedures to test the congruence hypothesis
          derived from the multidimensional model of leadership. The results
          showed that defensive players preferred and perceived greater amounts
          of democratic behavior, autocratic behavior, and social support than
          did offensive players. Also, the congruence of preferred and perceived
          leadership in the dimension of social support was critical to
          enhancing member satisfaction. On the other hand, perceived leadership
          (i.e., the actual behaviors) in training and instruction as well as
          positive feedback were stronger determinants of satisfaction with
          leadership than either the preferred leadership or the congruence of
          preferred and perceived leadership in these dimensions.
          <h2>Call for leadership</h2>
          the advance that servant leadership should be viewed as a viable form
          of leadership to be studied and supported within the domain of
          intercollegiate athletics. Servant leadership is different than other
          approaches to leadership as the emphasis of leadership is explicitly
          on the needs of followers, and because this approach emphasizes the
          ideal of service in the relationship between leader and follower. In
          addition, servant leadership is a people-centered approach to
          leadership that includes an ethical component. We propose that
          athletic directors demonstrating servant leadership will provide the
          leadership necessary to support the development of student-athletes,
          cultivate an ethical environment that best supports this development,
          and inspire the call to service for employees within their athletic
          departments. Moreover, external pressures for ethical leadership and
          new actors in the field of intercollegiate athletics will lead to the
          development of servant leadership as a viable leadership paradigm in
          intercollegiate sport.
          <h2>Transformational and Transactional Leadership</h2>
          This study examined the leader behavior of interuniversity athletic
          administrators according to Bass's (1985)
          transformational/transactional leadership model. The impact of that
          behavior on subordinates’ satisfaction with leadership, perceived
          leader effectiveness, departmental commitment, and extra effort was
          also examined. A sample of head coaches from Ontario universities (N =
          114) completed the Multifactor Leadership Questionnaire (MLQ) Form 5X
          (Bass & Avolio, 1991) with regard to their athletic administrators.
          The resultant profile was one of predominantly transformational as
          opposed to transactional or nonleadership behavior. Furthermore,
          leader-centered behavior (idealized influence, attributed charisma)
          was used more often than subordinate-centered behavior (individualized
          consideration, intellectual stimulation). Coaches' satisfaction with
          leadership, perceived leader effectiveness, and extra effort were
          positively and strongly associated with transformational leadership
          and contingent reward behavior, whereas negative relationships were
          observed for management-by-exception (passive) and nonleadership
          behaviors. Leader behavior was not associated with the coaches'
          commitment to the athletic department.
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

            <YoutubeEmbedSpo6 />
          </div>
        </center>
      </div>
    </div>
  );
}

export default heal1;
