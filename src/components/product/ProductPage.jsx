import React from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  // Use useParams to access the route parameters
  const { bookmark } = useParams();

  // Find the corresponding learning outcome based on the bookmark
  const learningOutcome =
    LO1.find((lo) => lo.bookmark === `#${bookmark}`) ||
    LO2.find((lo) => lo.url === `#${bookmark}`);

  return (
    <div>
      <h2>Learning Outcome Details</h2>
      <p>Description: {learningOutcome.description}</p>
      <p>Course: {learningOutcome.course}</p>
    </div>
  );
};

export default ProductPage;
