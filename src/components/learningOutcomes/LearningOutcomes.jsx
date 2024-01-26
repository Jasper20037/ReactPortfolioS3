// Component for services part of the page
import React from "react";
import "./learning-outcomes.css";
// routes for the learning outcomes
import { AiOutlineCheck } from "react-icons/ai";

const LearningOutcomes = () => {
  const learningOutcomesArray = [
    {
      lo: 1,
      name: "Learning Outcome 1",
      previousWorks: [
        {
          id: 1,
          productId: 1,
          title: "Personal Portfolio",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Personal-portfolio.html",
          course: "FED",
        },
        {
          id: 16,
          productId: 10,
          title: "Noise Control (Project)",
          URL: "https://jasper20037.github.io/portfolio-work/products/Project/index.html",
          course: "Project",
        },
        {
          id: 2,
          productId: 2,
          title: "Product Website",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Product-website.html",
          course: "FED",
        },
        {
          id: 3,
          productId: 3,
          title: "Synq webshop",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Synq-webshop.html",
          course: "FED",
        },
        {
          id: 4,
          productId: 4,
          title: "Progressive Web App (PWA) - portfolio",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/PWA.html",
          course: "FED",
        },
        {
          id: 5,
          productId: 5,
          title: "Pokemon Battle Game",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Pokemon-game.html",
          course: "FED",
        },
        {
          id: 6,
          productId: 6,
          title: "Product Poster",
          URL: "https://jasper20037.github.io/portfolio-work/products/MP/Product-poster.html",
          course: "MP",
        },
        {
          id: 7,
          productId: 7,
          title: "3D Spooky",
          URL: "https://jasper20037.github.io/portfolio-work/products/MP/Halloween.html",
          course: "MP",
        },
        {
          id: 8,
          productId: 8,
          title: "3D Abstract Blobs",
          URL: "https://jasper20037.github.io/portfolio-work/products/MP/Abstract-Blobs.html",
          course: "MP",
        },
      ],
    },
    {
      lo: 2,
      name: "Learning Outcome 2",
      previousWorks: [
        {
          id: 7,
          productId: 2,
          title: "Product website",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Product-website.html",
          course: "FED",
        },
        {
          id: 16,
          productId: 10,
          title: "Noise Control (Project)",
          URL: "https://jasper20037.github.io/portfolio-work/products/Project/index.html",
          course: "Project",
        },
        {
          id: 8,
          productId: 3,
          title: "Pokemon Battle Game",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Pokemon-game.html",
          course: "FED",
        },
        {
          id: 9,
          productId: 1,
          title: "React Portfolio",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Personal-portfolio.html",
          course: "FED",
        },
        {
          id: 10,
          productId: 4,
          title: "Product Poster",
          URL: "https://jasper20037.github.io/portfolio-work/products/MP/Product-poster.html",
          course: "MP",
        },
        {
          id: 11,
          productId: 5,
          title: "3D Spooky",
          URL: "https://jasper20037.github.io/portfolio-work/products/MP/Halloween.html",
          course: "MP",
        },
        {
          id: 12,
          productId: 6,
          title: "3D Abstract Blobs",
          URL: "https://jasper20037.github.io/portfolio-work/products/MP/Abstract-Blobs.html",
          course: "MP",
        },
      ],
    },
    {
      lo: 3,
      name: "Learning Outcome 3",
      previousWorks: [
        {
          id: 13,
          productId: 2,
          title: "Cute Ghost - Itterations",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Product-website.html",
          course: "FED",
        },
        {
          id: 14,
          productId: 1,
          title: "React Portfolio - itterations",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Personal-portfolio.html",
          course: "FED",
        },
        {
          id: 15,
          productId: 4,
          title: "Product Poster - Itterations",
          URL: "https://jasper20037.github.io/portfolio-work/products/MP/Halloween.html",
          course: "MP",
        },
        {
          id: 16,
          productId: 10,
          title: "Noise Control (Design) - Itterations",
          URL: "https://jasper20037.github.io/portfolio-work/products/Project/index.html",
          course: "Project",
        },
        {
          id: 16,
          productId: 10,
          title: "Noise Control (Website) - Itterations",
          URL: "https://jasper20037.github.io/portfolio-work/products/Project/index.html",
          course: "Project",
        },
      ],
    },
    {
      lo: 4,
      name: "Learning Outcome 4",
      previousWorks: [
        // { id: 16, title: "Product website - Itterations", course: "FED" },
        {
          id: 17,
          productId: 1,
          title: "React Portfolio",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Personal-portfolio.html",
          course: "FED",
        },
        {
          id: 20,
          productId: 1,
          title: "Progressive Web App (PWA) - portfolio",
          URL: "https://jasper20037.github.io/portfolio-work/products/FED/Personal-portfolio.html",
          course: "FED",
        },
        {
          id: 18,
          productId: 5,
          title: "3D Spooky",
          URL: "https://jasper20037.github.io/portfolio-work/products/MP/Halloween.html",
          course: "MP",
        },
        {
          id: 19,
          productId: 6,
          title: "3D Abstract Blobs",
          URL: "https://jasper20037.github.io/portfolio-work/products/MP/Abstract-Blobs.html",
          course: "MP",
        },
        {
          id: 16,
          productId: 10,
          title: "Noise Control (Project)",
          URL: "https://jasper20037.github.io/portfolio-work/products/Project/index.html",
          course: "Project",
        },
      ],
    },
  ];
  return (
    <section id="learning-outcomes">
      <h5>What Learning outcomes I did</h5>
      <h2>Learning Outcomes</h2>
      <article className="container services__container">
        {/* Map the learningOutcomesArray to get all the Learning outcomes in the array */}
        {learningOutcomesArray.map((outcome) => (
          // For each outcome render a card with the outcome name
          <article className="service" key={outcome.lo}>
            <article className="service__head">
              <h3>{outcome.name}</h3>
            </article>
            <ul className="service__list">
              {/* Map the previous works to get all the previous works in the array */}
              {outcome.previousWorks.map((work) => (
                // For each work render a list item with the work title and a link to the product page
                // TODO - Make link to product page work
                <li key={work.id}>
                  <AiOutlineCheck className="service__list-icon" />
                  {/* Displaying the data */}
                  <li key={work.productId}>
                    <a href={work.URL}>{work.title}</a>
                  </li>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </article>
    </section>
  );
};

export default LearningOutcomes;

// {/* Mapping the data from Learning outcome 1 to display on the page */}
// {LO1.map(({ id, description, course, bookmark }) => {
//   return (
//     <li>
//       <AiOutlineCheck className="service__list-icon" />
//       <a href={bookmark}>{description}</a>
//     </li>
//   );
// })}
