import React from "react";

import design from "../../assits/design.svg";
import uiDesign from "../../assits/uiDesign.svg";
import fullStack from "../../assits/fullStack.svg";
import "./services.styles.scss";

const Services = () => (
  <section id="services" className="services">
    <div className="title">Services</div>
    <div className="services-content">
      <div className="row">
        <img src={design} alt="Designing Things" />
        <h3>Designing things</h3>
        <p>
          Colors, fonts, images, components, Patterns.. Design is everywhere.
          From the dress you’re wearing to the smartphone you’re holding, it’s
          design.
        </p>
      </div>
      <div className="row">
        <img src={uiDesign} alt="UI/UX Design" />
        <h3>UI/UX Design</h3>
        <p>
          Good UX is all about making technology user-friendly. UI is the
          saddle, the stirrups, & the reins. UX is the feeling you get being
          able to ride the horse.
        </p>
      </div>
      <div className="row">
        <img src={fullStack} alt="Full Stack Development" />
        <h3>Full Stack Development</h3>
        <p>
          Get your application up & running in less than a week built with the
          most popular web development technologies.
        </p>
      </div>
    </div>
  </section>
);
export default Services;
