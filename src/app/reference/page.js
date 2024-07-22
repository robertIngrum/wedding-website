'use client'

import styles from "./page.module.css";
import ColorPreview from "./components/ColorPreview";
import Vine from "@/components/Vine/Vine";

export default function Reference() {
  return (
    <main className={styles.main}>
      <h1>Reference</h1>
      <p>
        This is a reference page for components and design elements.
      </p>

      <div className={styles.vineContainer}>
        <h2>Vine</h2>
        <Vine className={styles.vine} path="" height="100" width="100" debugPath={false} />
      </div>

      <div className={styles.colorContainer}>
        <h2>Colors</h2>
        <ColorPreview />
      </div>
    </main>
  );
}
