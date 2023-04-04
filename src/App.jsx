import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <main>Content</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
