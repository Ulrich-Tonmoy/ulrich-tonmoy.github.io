"use client";

import { Fragment } from "react";
import styles from "@/styles/desk.module.css";
import { ComputerCanvas, EarthCanvas, StarsCanvas } from "@/components/canvas";

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
