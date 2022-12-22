/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ARM Assembly Program Simulator with Multicycle operations and Pipeline!",
    description:
      "The simulator is capable of displaying, after each instruction, the various instructions that are currently residing in the pipeline, along with the stage that they are in.",
    url: "https://github.com/sahilbansal17/CSL216-Assignments/tree/master/A5",
  },
  {
    title: "Pocket Tanks",
    description:
      "The game starts with two tanks placed in the two halves of the screen over a randomly generated terrain. Play it below:",
    url: "https://sahilbansal17.github.io/Pocket_Tanks/",
  },
  {
    title: "AC Circuit Solver",
    description:
      "Given the netlist, this program draws an AC circuit and finds the current/voltage values.",
    url: "https://github.com/sahilbansal17/AC_Circuit_Solver",
  },
  {
    title: "Screensaver Colliding Balls",
    description:
      "A simple screen saver is displayed with n (variable - user chosen) number of balls on the screen. There are two modes provided (2D & 3D).",
    url: "https://github.com/sahilbansal17/Screensaver-Colliding-Balls",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
