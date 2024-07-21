'use client'

import styles from "./styles.module.css";

export default function ColorPreview() {
  return (
    <div className={styles.colors}>
      <div className={styles.colorPrimary}>Primary</div>
      <div className={styles.colorPrimarySubtle}>Primary Subtle</div>
      <div className={styles.colorSecondary}>Secondary</div>
      <div className={styles.colorBackground}>Background</div>
    </div>
  )
}

