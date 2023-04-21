import React, { useState } from "react";
import logo from "./assets/allari-logo.png";
import menu from "./assets/menu-aberto.png";
import onHover1 from "./assets/onHover1.jpeg";
import onHover2 from "./assets/onHover2.jpeg";
import banner from "./assets/Banner.jpeg";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <header className="header-web-container">
        <img src={logo} />
        <div className="links">
          <div className="links_main">
            <a>Production Support</a>
            <a>Resources</a>
            <a>Why Allari?</a>
          </div>
          <div className="links_cta">
            <button className="btn btn-primary">SCHEDULE A CALL</button>
          </div>
        </div>
      </header>
      <header className="header-mobile-container">
        <img src={logo} />
        <div className="links">
          <img className="menu" src={menu} />
        </div>
      </header>
      <article>
        <h4>Suggestion 1: Header needs to be optimized for responsiveness</h4>
        <p>
          Header links overlap each other and mobile menu appears alongside CTA
          "Schedule a call". For user experience, is better to display all links
          simultaneously. Also I dont believe is necessary to have to CTA
          buttons very close to each other(one on the header, one on the
          banner). Another thing for the header is that it would be good for
          users to have an on hover on the links for example a different color
          on hover to demonstrate which link is on hover.
        </p>
        <h4>
          Suggestion 2: Maybe remove on hover interactions if there is no
          clickable function or following path
        </h4>
        <img src={onHover1} />
        <img src={onHover2} />
        <h4>Suggestion 3: Maybe remove unused extra spacing on banner</h4>
        <p>
          Remove extra margin or padding from banners by decreasing pixels for
          better visuals and fit more content into one page
        </p>
        <img src={banner} />
      </article>
    </React.Fragment>
  );
}

export default App;
