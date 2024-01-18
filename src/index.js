// importing reactDOM to render components and elements
import React from "react";
import ReactDOM from "react-dom";
// importing App component
import App from "./App";
// importing css file
import "./main.css";


// rendering App component (app.jsx - const app) in id root (index.html (main))
ReactDOM.render(<App />, document.getElementById("root"));

// // rendering Product component (Product.jsx - const Product) in id product-page (productPage.html (main))
// ReactDOM.render(<Product />, document.getElementById("product-page"));
