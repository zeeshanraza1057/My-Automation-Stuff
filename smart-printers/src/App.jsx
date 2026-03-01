import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
// import Contact from "./Pages/Contact/Contact";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Blogs from "./Pages/Blogs/BlogInsights";


export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home lang={lang} setLang={setLang} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<div className="text-center py-20">Page Not Found</div>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
