import { useState } from "react";
import contactInfo from "../config/contact";

export default function Navbar({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold">Smart Printers</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-blue-600 transition">{lang === "en" ? "Home" : "ہوم"}</a>
          <a href="#about" className="hover:text-blue-600 transition">{lang === "en" ? "About" : "ہمارے بارے میں"}</a>
          <a href="#services" className="hover:text-blue-600 transition">{lang === "en" ? "Services" : "سروسز"}</a>
          <a href="#contact" className="hover:text-blue-600 transition">{lang === "en" ? "Contact" : "رابطہ"}</a>

          <a href={`tel:${contactInfo.phone}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            {lang === "en" ? "Call" : "کال"}
          </a>
          <a
            href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            {lang === "en" ? "WhatsApp" : "واٹس ایپ"}
          </a>

          <button onClick={() => setLang(lang === "en" ? "ur" : "en")} className="underline text-sm text-gray-700">
            {lang === "en" ? "اردو" : "EN"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">{isOpen ? "✖" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 py-4 bg-white shadow-lg">
          <a href="#home">{lang === "en" ? "Home" : "ہوم"}</a>
          <a href="#about">{lang === "en" ? "About" : "ہمارے بارے میں"}</a>
          <a href="#services">{lang === "en" ? "Services" : "سروسز"}</a>
          <a href="#contact">{lang === "en" ? "Contact" : "رابطہ"}</a>
        </div>
      )}
    </nav>
  );
}
