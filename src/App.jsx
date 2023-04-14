import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
function App() {
  return (
    <Router>
      <div className='flex flex-col items-center justify-between h-screen'>
        <Navbar />

        <main
          className='container mx-auto pb-10 px-4
        '
        >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
