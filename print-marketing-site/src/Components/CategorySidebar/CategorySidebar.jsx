import styles from "./CategorySidebar.module.scss";

const categories = [
  { name: "Business Cards", icon: "💼" },
  { name: "Luxury Envelopes", icon: "✉️" },
  { name: "Stickers", icon: "🏷️" },
  { name: "Corporate Boxes", icon: "📦" },
  { name: "Wedding Cards", icon: "💍" },
  { name: "Bid Boxes", icon: "🎁" },
  { name: "Mugs", icon: "☕" },
  { name: "Polaroid", icon: "📸" },
];

export default function CategorySidebar() {
  return (
    <div className={styles.sidebar}>
      <h3>Top Categories</h3>

      <div className={styles.list}>
        {categories.map((cat, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.icon}>{cat.icon}</span>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      <button className={styles.viewAll}>View All Categories</button>
    </div>
  );
}
