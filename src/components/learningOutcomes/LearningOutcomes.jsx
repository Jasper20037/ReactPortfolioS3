// Component for services part of the page
import React from "react";
import "./learning-outcomes.css";
// importing icons from react-icons
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link from React Router

// Variable for Learning outcome cards
const LO1 = [
  {
    id: 1,
    description: "Personal Portfolio",
    course: "FED",
    bookmark: "#PersonalPortfolio",
  },
  {
    id: 2,
    description: "Product Website",
    course: "FED",
    bookmark: "#ProductWebsite",
  },
  {
    id: 3,
    description: "Pokemon Battle Game",
    course: "FED",
    bookmark: "#PokemonGame",
  },
  {
    id: 4,
    description: "Product poster",
    course: "MP",
    bookmark: "#ProductPoster",
  },
  {
    id: 5,
    description: "3D Blade runner Architecture",
    course: "MP",
    bookmark: "#BladeRunner3D",
  },
  {
    id: 6,
    description: "Passionate idea - Library Reserach",
    course: "UCD",
    bookmark: "#PassionateIdea",
  },
];

const LO2 = [
  {
    id: 1,
    description: "Product Website - Code snippet",
    course: "FED",
    url: "https://jasper20037.github.io/ProductWebsite/",
  },
  {
    id: 2,
    description: "Pokemon Battle Game - Code snippet",
    course: "FED",
    url: "https://jasper20037.github.io/PokemonGame/",
  },
  {
    id: 3,
    description: "React portfolio - Code snippet",
    course: "MP",
    url: "-",
  },
];

const LearningOutcomes = () => {
  return (
    <section id="learning-outcomes">
      <h5>What Learning outcomes I did</h5>
      <h2>Learning Outcomes</h2>
      <div className="container services__container">
        <article className="service">
          <article className="service__head">
            <h3>Learning Outcome 1</h3>
          </article>
          <ul className="service__list">
            {LO1.map(({ id, description, course, bookmark }) => {
              return (
                <li key={id}>
                  <AiOutlineCheck className="service__list-icon" />
                  <Link to={bookmark}>{description}</Link>{" "}
                  {/* Use Link for navigation */}
                </li>
              );
            })}
          </ul>
        </article>

        <article className="service">
          <article className="service__head">
            <h3>Learning Outcome 2</h3>
          </article>
          <ul className="service__list">
            {LO2.map(({ id, description, course, url }) => {
              return (
                <li key={id}>
                  <AiOutlineCheck className="service__list-icon" />
                  <a href={url}>{description}</a>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default LearningOutcomes;
