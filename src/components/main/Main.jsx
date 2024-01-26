// component for main part of the page
import React from "react";
import "./main.css";
// import images for work cards
import IMG1 from "../../assets/work1.png";
import IMG2 from "../../assets/work2.png";
import IMG3 from "../../assets/3DAbstract.png";
import IMG4 from "../../assets/work4.jpg";
import IMG5 from "../../assets/work5.png";
import IMG6 from "../../assets/work6.jpg";
import IMG7 from "../../assets/work7.jpg";
// Importing work
import Assignment1 from "../../assets/PDF/Assignment1-research.pdf";
import projectplan from "../../assets/PDF/ProjectPlan-Sinq.pdf";

// Variable for work cards
const work = [
  {
    key: 1,
    id: "NoiseControl",
    img: IMG1,
    title: "Noise Control - Project",
    course: "FED",
    github: "https://git.fhict.nl/I514889/noise-control",
    deproductmo: "https://jasper20037.github.io/ProductWebsite/",
  },
  {
    key: 2,
    id: "PersonalPortfolio",
    img: IMG1,
    title: "Personal Portfolio",
    course: "FED",
    github: "https://github.com/Jasper20037/ReactPortfolioS3/tree/master",
    deproductmo:
      "https://jasper20037.github.io/portfolio-work/products/FED/Personal-portfolio.html",
  },
  {
    key: 3,
    id: "ProductWebsite",
    img: IMG2,
    title: "Product Landing Page",
    course: "FED",
    github: "https://github.com/Jasper20037/ProductWebsite",
    deproductmo:
      "https://jasper20037.github.io/portfolio-work/products/FED/Product-website.html",
  },
  {
    key: 4,
    id: "3DAbstract",
    img: IMG3,
    title: "Abstract Blobs",
    course: "MP",
    product: "https://jasper20037.github.io/PokemonGame/",
  },
  {
    key: 5,
    id: "ProductPoster",
    img: IMG4,
    title: "Product poster",
    course: "MP",
    github: "",
    product: "-",
  },
  {
    key: 6,
    id: "BladeRunner3D",
    img: IMG5,
    title: "3D Blade runner Architecture",
    course: "MP",
    github: "",
    product: "-",
  },
];

const Main = () => {
  return (
    <section id="work">
      <h5>My Work</h5>
      <h2>My Proudest Work</h2>

      <article className="container work__container">
        {/* mapping the data from the "work" array to display the product cards*/}
        {work.map(({ key, id, img, title, course, github, product }) => {
          return (
            <article id={id} key={key} className="portfolio__item">
              <article className="portfolio__item-img">
                <img src={img} alt="work1" />
              </article>
              <article className="head-text">
                <h3>{title}</h3>
                <small>{course}</small>
              </article>
              <article className="portfolio__item-cta">
                {/* if there is a github page show the github button else show nothing */}
                {/* Condtional if statement */}
                {/* If github is true (is not empty) show the button else (:) show none */}
                {github ? (
                  <a
                    className="button secondary-button"
                    href={github}
                    target="_blank"
                  >
                    Github
                  </a>
                ) : (
                  ""
                )}
                <a
                  className="button primary-button"
                  href={product}
                  target="_blank"
                >
                  Show work
                </a>
              </article>
            </article>
          );
        })}
      </article>
    </section>
  );
};

export default Main;
