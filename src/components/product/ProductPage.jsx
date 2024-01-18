import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productId } = useParams();

  const learningOutcomesArray = [
    {
      lo: 1,
      name: "Learning Outcome 1",
      previousWorks: [
        {
          id: 1,
          productId: 1,
          title: "Personal Portfolio",
          productDescription: "Product description",
          productUrl: "https://jasper20037.github.io/PersonalPortfolio/",
          course: "FED",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 2,
          productId: 2,
          title: "Product Website",
          course: "FED",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 3,
          productId: 3,
          title: "Pokemon Battle Game",
          course: "FED",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 4,
          productId: 4,
          title: "Product Poster",
          course: "MP",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 5,
          productId: 5,
          title: "3D Spooky",
          course: "MP",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 6,
          productId: 6,
          title: "3D Abstract Blobs",
          course: "MP",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
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
          title: "Product website - Code",
          course: "FED",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 8,
          productId: 3,
          title: "Pokemon Battle Game",
          course: "FED",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 9,
          productId: 1,
          title: "React Portfolio",
          course: "FED",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 10,
          productId: 4,
          title: "Product Poster",
          course: "MP",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 11,
          productId: 5,
          title: "3D Spooky",
          course: "MP",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 12,
          productId: 6,
          title: "3D Abstract Blobs",
          course: "MP",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
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
          title: "Product website - Itterations",
          course: "FED",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 14,
          productId: 1,
          title: "React Portfolio - itterations",
          course: "FED",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 15,
          productId: 4,
          title: "3D Spooky - Itterations",
          course: "MP",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        // { id: 12, title: "3D Abstract Blobs", course: "MP" },
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
          course: "FED",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 18,
          productId: 5,
          title: "3D Spooky",
          course: "MP",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
        {
          id: 19,
          productId: 6,
          title: "3D Abstract Blobs",
          course: "MP",
          LO1: "",
          LO2: "",
          LO3: "",
          LO4: "",
        },
      ],
    },
  ];

  const product = learningOutcomesArray.find(
    (product) => product.previousWorks.id === productId
  );

  return (
    <div>
      <h1>{product.name}</h1>
      {/* if product has a description show it */}
      {product.description && <p>{product.description}</p>}
    </div>
  );
};

export default ProductPage;
