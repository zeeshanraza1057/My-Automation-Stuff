import Hero from "../../Components/Hero/Hero";
// import About from "../About/About";
import ServicesPreview from "../../Components/ServicePreview/ServicesPreview";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
import Blogs from "../Blogs/BlogInsights";
// import CTA from "../../Components/CTA/CTA";
// import ContactPage from "../Contact/Contact";
import styles from "./Home.module.scss";


export default function Home({ lang, setLang }) {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <Hero lang={lang} setLang={setLang} />

      {/* About Section */}
      {/* <About /> */}

      {/* Services Section */}
      <ServicesPreview />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blogs/Insights Section */}
      <Blogs />

      {/* Call To Action */}
      {/* <CTA /> */}

      {/* Contact Section */}
      {/* <ContactPage /> */}
    </div>
  );
}
