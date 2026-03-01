import { motion } from "framer-motion";
import { fadeInUp, containerStagger } from "../../Animations/motion";
import styles from "./BlogInsights.module.scss";

const blogPosts = [
  {
    id: 1,
    image: "/images/blog/printing-trends-2025.jpg",
    title: "Top Printing Trends for Small Businesses in 2025",
    excerpt: "Whether you're a startup gearing up for your marketing campaign or a small business owner looking for cost-effective printing solutions, 2025 is all about sustainability, personalization, and digital integration. Discover how modern printing techniques can elevate your brand presence.",
    link: "/blog/printing-trends-2025",
    category: "Printing Tips"
  },
  {
    id: 2,
    image: "/images/blog/outdoor-advertising.jpg",
    title: "Outdoor Advertising Strategies That Drive Results in Pakistan",
    excerpt: "From billboards on Main Boulevard Lahore to LED displays in Karachi's commercial districts, outdoor advertising remains one of the most powerful marketing tools. Learn how to maximize visibility and ROI with strategic placement and creative design.",
    link: "/blog/outdoor-advertising-strategies",
    category: "Marketing"
  },
  {
    id: 3,
    image: "/images/blog/brand-identity.jpg",
    title: "Building a Strong Brand Identity: Design Essentials",
    excerpt: "Your brand identity is more than just a logo—it's your lead-generation machine. From color psychology to typography choices, we explore the essential elements that make brands memorable and help businesses stand out in competitive markets.",
    link: "/blog/brand-identity-essentials",
    category: "Design"
  },
  {
    id: 4,
    image: "/images/blog/signboard-design.jpg",
    title: "Shop Signboard Design Ideas That Attract Customers",
    excerpt: "A well-designed shop signboard isn't just about aesthetics—it's your 24/7 silent salesperson. Explore creative signboard ideas, LED display options, and design tips that turn foot traffic into customers for retail stores across Pakistan.",
    link: "/blog/signboard-design-ideas",
    category: "Retail"
  },
  {
    id: 5,
    image: "/images/blog/packaging-design.jpg",
    title: "Custom Packaging Design: Making Your Products Stand Out",
    excerpt: "In today's competitive market, packaging is your first impression. Learn how custom packaging design can enhance brand recognition, improve customer experience, and boost sales for products ranging from cosmetics to food items.",
    link: "/blog/custom-packaging-design",
    category: "Packaging"
  },
  {
    id: 6,
    image: "/images/blog/flex-printing.jpg",
    title: "Flex Printing vs. Digital Printing: Which is Right for You?",
    excerpt: "Choosing between flex printing and digital printing can be confusing. We break down the pros, cons, costs, and ideal use cases for each printing method to help you make the best decision for your advertising and promotional needs.",
    link: "/blog/flex-vs-digital-printing",
    category: "Printing Tips"
  }
];

export default function BlogInsights() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className={styles.mainTitle}>Ideas. Insights. Inspiration.</h1>
          <p className={styles.subtitle}>
            Stay updated with the latest in printing, branding, outdoor advertising, and design trends.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className={styles.blogGrid}
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className={styles.blogCard}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className={styles.blogImage}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%239ca3af"%3EBlog Image%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className={styles.category}>{post.category}</div>
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>

                <a href={post.link} className={styles.readMoreButton}>
                  <span>Read More</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}