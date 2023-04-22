import React, { useState } from "react";
import logo from "./assets/allari-logo.png";
import menu from "./assets/menu-aberto.png";
import onHover1 from "./assets/onHover1.jpeg";
import onHover2 from "./assets/onHover2.jpeg";
import banner from "./assets/Banner.jpeg";
import buttonDesktop from "./assets/button-desktop.jpeg";
import buttonMobile from "./assets/button-mobile.jpeg";
import croppedButton from "./assets/croppedButton.jpeg";

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
        <h4>
          Suggestion 1: Header needs to be optimized for responsiveness (See
          example on this website's header)
        </h4>
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
        <h4>Suggestion 4: CTA buttons change format based on device</h4>
        <p>
          Can be easily fixed by defining a default button class that will be
          passed through all buttons on the pages
        </p>
        <div className="column-suggestion">
          <div>
            <p>Desktop</p>
            <img src={buttonDesktop} />
          </div>
          <div>
            <p>Mobile</p>
            <img src={buttonMobile} />
          </div>
        </div>
        <h4>Suggestion 5: button is cropped on mobile</h4>
        <p>
          Button is being cropped on mobile devices, but can be easily fixed by
          assigning a width with "%" or "rem". Using this, means that the entire
          website can be responsive depending on the size of the device
        </p>
        <img src={croppedButton} />
        <h4>Great Solution for most suggestiong</h4>
        <p>
          Utilize a CSS pre-processor to maintain defined default values for
          buttons, font size, and colors
        </p>
      </article>
    </React.Fragment>
  );
}

export default App;
