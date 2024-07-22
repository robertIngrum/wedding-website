import styles from "./styles.module.css";
import { dancingScript, merriweather } from "@/lib/fonts";
import Link from "next/link"

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
        <Link href="/who" className={styles.whoLink}>Who?</Link>
        <Link href="/where" className={styles.whereLink}>Where?</Link>
        <Link href="/when" className={styles.whenLink}>When?</Link>
      </div>
    </header>
  );
}
