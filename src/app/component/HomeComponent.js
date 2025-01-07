import React from "react";
import styles from "./HomeComponent.module.scss";

const HomeComponent = () => {
  return (
    // <div className={styles.HomeContainer}>
    //   <h1>Hi, I'm vivek soni</h1>
    //   <h2>Full Stack Developer</h2>
    //   <h2>develop</h2>
    //   <p>description</p>
    // </div>

    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <p className={styles.welcomeText}>WELCOME TO MY WORLD</p>
        <h1>
          Hi, I'm <span className={styles.highlight}>Vivek Soni</span>
          <br /> <span className={styles.developer}>Full Stack Developer.</span>
        </h1>
        <p className={styles.description}>
          I use animation as a third dimension by which to simplify experiences
          and guide through each and every interaction. I’m not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
      </div>
      <div className={styles.heroImage}>
        <p>image</p>
        {/* <img src={profileImage} alt="Jone Lee" /> */}
      </div>
    </section>
  );
};

export default HomeComponent;
