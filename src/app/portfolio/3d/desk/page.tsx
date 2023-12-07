"use client";

import { Fragment } from "react";
import styles from "@/styles/desk.module.css";
import { ComputerCanvas, EarthCanvas, StarsCanvas } from "@/components/canvas";

const Desk = () => {
  return (
    <section className={`${styles.deskSection} ${styles.paddingX} bg-black-500`}>
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
