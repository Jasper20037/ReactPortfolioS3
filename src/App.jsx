// Jsx to use emmits for the app

// rafce to create a react arrow function component with export
import React from "react";

// ? Importing all components to show them on the page
// Importing the header component
import Header from "./components/header/Header";
// importing the nav component
import Nav from "./components/nav/Nav";
// importimng the about component
import About from "./components/about/About";
// importing the experience component
import Experience from "./components/experience/Experience";
// importing services component
import LearningOutcomes from "./components/learningOutcomes/LearningOutcomes";
// importing main component
import Main from "./components/main/Main";
// importing testimonials component
import Feedbacks from "./components/feedback/Feedback";
// importing contact component
import Contact from "./components/contact/Contact";
// importing footer component
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    // Importing all components in the main app(lication) to show them on the page
    // Components in order of view order
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <LearningOutcomes />
      <Main />
      <Feedbacks />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
