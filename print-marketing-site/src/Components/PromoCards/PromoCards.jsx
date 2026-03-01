import styles from "./PromoCards.module.scss";

const promos = [
  {
    title: "Personalized Drinkware",
    desc: "Custom mugs & bottles for your brand",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
  },
  {
    title: "Merch That Matters",
    desc: "Promotional products with purpose",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
  },
  {
    title: "Launch Your Business",
    desc: "Everything you need to start strong",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
  },
];

export default function PromoCards() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {promos.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span>Shop Now →</span>
            </div>

            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}
