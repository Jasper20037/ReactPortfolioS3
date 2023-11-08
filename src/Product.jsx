// Jsx to use emmits for the productpage
// rafce to create a react arrow function component with export
import React from "react";

// ? Importing all components to show them on the page
// Importing the ProductPage component
import ProductPage from "./components/product/ProductPage.jsx";
import Footer from "./components/footer/Footer.jsx";

const Product = () => {
  return (
    // Components in order of view order
    <div>
      {/* All components */}
      <ProductPage />
      <Footer />
    </div>
  );
};

export default Product;
