// importing reactDOM to render components and elements
import ReactDOM from "react-dom";
// importing Product component
import Product from "./Product";
// importing router component
import { BrowserRouter as Router } from 'react-router-dom';

// rendering Product component (Product.jsx - const Product) in id product-page (productPage.html (main))
ReactDOM.render(
  <Router>
    <Product />
  </Router>,
  document.getElementById("product-page")
);