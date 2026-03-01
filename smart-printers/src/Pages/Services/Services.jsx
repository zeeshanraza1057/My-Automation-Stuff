import ServicesPreview from "../../Components/ServicePreview/ServicesPreview";
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <div className={styles.services}>
      <ServicesPreview />
    </div>
  );
}
