import React from "react";
// import image from "./images/elephants.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./pages/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import { Posts } from "./pages/Posts/Posts.jsx";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
