import styles from "./styles.module.css";
import { dancingScript, merriweather } from "@/lib/fonts";

export default function Header() {
  const nameStyles = `${dancingScript.className} ${styles.nameText}`;
  const weddingStyles = `${merriweather.className} ${styles.weddingText}`;

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <div className={nameStyles}>Lilly and Robert's</div>
        <div className={weddingStyles}>Wedding</div>
      </div>

      <div className={styles.links}>
        <div className={styles.whoLink}>Who?</div>
        <div className={styles.whereLink}>Where?</div>
        <div className={styles.whenLink}>When?</div>
      </div>
    </header>
  );
}
