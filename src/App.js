import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import title from "./bg7.png";
import Home from "./Components/home.js";
import Health from "./Components/Health.js";
import Sports from "./Components/Sports.js";
import Economy from "./Components/Economy.js";
import About from "./Components/about.js";
import Contact from "./Components/contact.js";
import Heal1 from "./Components/heal1.js";
import Eco1 from "./Components/eco1.js";
import Eco2 from "./Components/Eco2.js";
import Eco3 from "./Components/Eco3.js";
import Eco4 from "./Components/Eco4.js";
import Eco5 from "./Components/Eco5.js";
import Eco6 from "./Components/Eco6.js";
import Heal2 from "./Components/heal2.js";
import Heal3 from "./Components/heal3.js";
import Heal4 from "./Components/heal4.js";
import Heal5 from "./Components/heal5.js";
import Heal6 from "./Components/heal6.js";
import Sport1 from "./Components/sport1.js";
import Sport2 from "./Components/sport2.js";
import Sport3 from "./Components/sport3.js";
import Sport4 from "./Components/sport4.js";
import Sport5 from "./Components/sport5.js";
import Sport6 from "./Components/sport6.js";
import Latest from "./Components/latest.js";
export default function App() {
  return (
    <div className="App">
      <Router>
        <center>
          <img src={title} className="pi" />
        </center>

        <center>
          <div className="menu">
            <Link
              className="menuitem"
              style={{ textDecoration: "none", color: "black" }}
              to="/"
            >
              <h2>Home</h2>
            </Link>
            <Link
              className="menuitem"
              style={{ textDecoration: "none", color: "black" }}
              to="/health"
            >
              <h2>Health</h2>
            </Link>
            <Link
              className="menuitem"
              style={{ textDecoration: "none", color: "black" }}
              to="/sports"
            >
              <h2>Sports</h2>
            </Link>
            <Link
              className="menuitem"
              style={{ textDecoration: "none", color: "black" }}
              to="/economy"
            >
              <h2>Economy</h2>
            </Link>
            <Link
              className="menuitem"
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              <h2>About</h2>
            </Link>
            <Link
              className="menuitem"
              style={{ textDecoration: "none", color: "black" }}
              to="/contact"
            >
              <h2>Contact</h2>
            </Link>
          </div>
        </center>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/health" element={<Health />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health/article1" element={<Heal1 />} />
          <Route path="/health/article2" element={<Heal2 />} />
          <Route path="/health/article3" element={<Heal3 />} />
          <Route path="/health/article4" element={<Heal4 />} />
          <Route path="/health/article5" element={<Heal5 />} />
          <Route path="/health/article6" element={<Heal6 />} />
          <Route path="/sports/article1" element={<Sport1 />} />
          <Route path="/sports/article2" element={<Sport2 />} />
          <Route path="/sports/article3" element={<Sport3 />} />
          <Route path="/sports/article4" element={<Sport4 />} />
          <Route path="/sports/article5" element={<Sport5 />} />
          <Route path="/sports/article6" element={<Sport6 />} />
          <Route path="/economy/article1" element={<Eco1 />} />
          <Route path="/economy/article2" element={<Eco2 />} />
          <Route path="/economy/article3" element={<Eco3 />} />
          <Route path="/economy/article4" element={<Eco4 />} />
          <Route path="/economy/article5" element={<Eco5 />} />
          <Route path="/economy/article6" element={<Eco6 />} />
          <Route path="/latest" element={<Latest />} />
        </Routes>
      </Router>

      <footer>
        <div className="footer">
          <div className="optional">
            <h4>Follow us on Github</h4>
            <u>
              <a href="https://github.com/BE3026">
                <h5>Bharath Eswar</h5>
              </a>
            </u>
            <u>
              <a href="https://github.com/SnowlinPazDavid">
                <h5>Snowlin Paz David</h5>
              </a>
            </u>
          </div>
          <div className="optional">
            <h4>Follow us on Linkedin</h4>
            <u>
              <a href="https://www.linkedin.com/in/bharath-eswar-a34ba6204/">
                <h5>Bharath Eswar</h5>
              </a>
            </u>
            <u>
              <a href="https://www.linkedin.com/in/snowlin-paz-david-940367210/">
                <h5>Snowlin Paz David</h5>
              </a>
            </u>
          </div>
          <div>
            <h4>Our youtube videos</h4>
            <u>
              <a href="https://www.youtube.com/">
                <h5>Click Here</h5>
              </a>
            </u>
          </div>
          <div>
            <h4>Contact Us</h4>
            <u>
              <a href="/contact">
                <h5>Click Here</h5>
              </a>
            </u>
          </div>
        </div>
        <b>
          <center>
            &copy;{new Date().getFullYear()} READ IT | All rights reserved |
            Terms Of Service | Privacy{" "}
          </center>
        </b>
      </footer>
    </div>
  );
}
