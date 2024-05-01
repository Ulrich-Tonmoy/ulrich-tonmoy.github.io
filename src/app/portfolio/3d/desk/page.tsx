"use client";

import styles from "@/styles/3d/desk.module.css";
import { ComputerCanvas, EarthCanvas, StarsCanvas } from "@/components/3d/canvas";

const Desk = () => {
  return (
    <section className={`${styles.deskSection} ${styles.paddingX} bg-slate-900`}>
      <title>Tonmoy - 3D Portfolio(Desk)</title>
      <div className={styles.deskModelContainer}>
        <StarsCanvas />
        <div className="lg:block hidden">
          <EarthCanvas />
        </div>
        <ComputerCanvas />
      </div>
    </section>
  );
};

export default Desk;
