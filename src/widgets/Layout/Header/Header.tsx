'use client'

import React from "react";
import styles from "./Header.module.sass";
import { Arrow, Logo, Naming, Search } from "@/shared/ui/Icon/Icon";
import NavBar from "@/entities/Navbar/Navbar";
import Navigation from "@/features/Navigation/ui/Navigation";
import Link from "next/link";
const Header = () => {
  return (
    <section className={styles.welcome}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.inner}>
            <Link href='/' className={styles.logo}>
              <Logo />
              <Naming />
            </Link>
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
