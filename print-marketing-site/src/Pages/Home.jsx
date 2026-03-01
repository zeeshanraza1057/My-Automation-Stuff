import Navbar from "../Components/Navbar/Navbar";
import HeroSection from "../Components/HeroSection/HeroSection.jsx";
import CategorySidebar from "../Components/CategorySidebar/CategorySidebar";
import PromoCards from "../Components/PromoCards/PromoCards";
import TrendingProducts from "../Components/TrendingProducts/TrendingProducts";
import Footer from "../Components/Footer/Footer";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className={styles.homeLayout}>
        <CategorySidebar />
        <HeroSection />
      </div>

      <PromoCards />
      <TrendingProducts />
      <Footer />
    </>
  );
}
