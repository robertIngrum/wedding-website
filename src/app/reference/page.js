'use client'

import styles from "./page.module.css";
import ColorPreview from "./components/ColorPreview";
import Vine from "@/components/Vine/Vine";
import { useEffect, useState } from "react";

export default function Reference() {
  const [vineTick, setVineTick] = useState(0);
  const [vineFrame, setVineFrame] = useState(0);

  const updateVine = () => {
    setVineTick(vineTick + 1);
  }

  useEffect(updateVine, []);
  useEffect(() => {
    setVineFrame(vineTick / 60)

    window.requestAnimationFrame(updateVine)
  }, [vineTick])

  return (
    <main className={styles.main}>
      <h1>Reference</h1>
      <p>
        This is a reference page for components and design elements.
      </p>

      <div className={styles.vineContainer}>
        <h2>Vine</h2>
        <Vine className={styles.vine}
          path=""
          height="100"
          width="100"
          depth={vineFrame}
          debugPath={false} />
      </div>

      <div className={styles.colorContainer}>
        <h2>Colors</h2>
        <ColorPreview />
      </div>
    </main>
  );
}
