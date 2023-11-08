import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes";
import Main from "./components/main/Main";
import Feedbacks from "./components/feedback/Feedback";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ProductPage from "./components/product/ProductPage"; // Import the ProductPage component

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Routes>
          <Route path="/product/:bookmark" element={<ProductPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/main" element={<Main />} />
          <Route path="/feedback" element={<Feedbacks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<LearningOutcomes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
