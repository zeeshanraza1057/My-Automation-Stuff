import styles from "./TrendingProducts.module.scss";

const products = [
  {
    name: "Premium Business Cards",
    price: "Rs. 2,500",
    image: "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1",
  },
  {
    name: "Custom Stickers",
    price: "Rs. 1,200",
    image: "https://images.unsplash.com/photo-1607082349566-1870e5e7c1d1",
  },
  {
    name: "Branded Mug",
    price: "Rs. 1,800",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
  },
  {
    name: "Wedding Invitation",
    price: "Rs. 5,000",
    image: "https://images.unsplash.com/photo-1520974735194-6c9d8c56b6a4",
  },
];

export default function TrendingProducts() {
  return (
    <section className={styles.section}>
      <h2>Trending Products</h2>

      <div className={styles.grid}>
        {products.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.name} />

            <div className={styles.info}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
