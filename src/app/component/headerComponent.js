"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HeaderComponent.module.scss";
import { headerMenu } from "../data";
import Link from "next/link";

export const HeaderComponent = () => {
  const [darkMode, setDarkMode] = useState(false);
  console.log("darkMode: ", darkMode);
  const handleMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("mode", "darkMode");
    } else {
      localStorage.setItem("mode", "lightMode");
    }
  },[darkMode]);
  return (
    <nav className={styles.headerNav}>
      <div className={styles.navContainer}>
        {headerMenu.map((value, i) => {
          return (
            <React.Fragment key={i}>
              <Link
                href={value.path}
                className={styles.navLink}
                onClick={() => value.name == "mode" && setDarkMode(!darkMode)}
              >
                <Image
                  src={value.icon}
                  alt={value.name}
                  unoptimized={true}
                  height={20}
                  width={20}
                  priority
                />
              </Link>
              {(i === 0 || i === headerMenu.length - 2) && (
                <hr className={styles.customHr} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
