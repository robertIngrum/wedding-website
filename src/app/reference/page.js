import styles from "./page.module.css";
import ColorPreview from "./components/ColorPreview";

export default function Reference() {
  return (
    <main className={styles.main}>
      <h1>Reference</h1>
      <p>
        This is a reference page for components and design elements.
      </p>

      <div className={styles.colorContainer}>
        <h2>Colors</h2>
        <ColorPreview />
      </div>
    </main>
  );
}
