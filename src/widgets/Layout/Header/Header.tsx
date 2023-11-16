'use client'

import React from "react";
import styles from "./Header.module.sass";
import { Arrow, Logo, Naming, Search } from "@/shared/ui/Icon/Icon";
import NavBar from "@/entities/Navbar/Navbar";
import Navigation from "@/features/Navigation/ui/Navigation";
const Header = () => {
  return (
    <section className={styles.welcome}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.inner}>
            <div className={styles.logo}>
              <Logo />
              <Naming />
            </div>
            <NavBar />
            <button className={styles.login}>Войти</button>
          </div>
        </header>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Путешествуйте с удовольствием, выбирайте TrusTTravel !
          </h1>
          <Navigation/>
        </div>
      </div>
    </section>
  );
};

export default Header;
