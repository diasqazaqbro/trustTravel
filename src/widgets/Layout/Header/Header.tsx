"use client";

import React from "react";
import styles from "./Header.module.sass";
import { Logo, Naming } from "@/shared/ui/Icon/Icon";
import NavBar from "@/entities/Navbar/Navbar";
import Navigation from "@/features/Navigation/ui/Navigation";
import Link from "next/link";
import useSession from "@/shared/hooks/useSession";
const Header = () => {
  const { getToken, isAuthorized } = useSession();
  const token = getToken();

  return (
    <section className={styles.welcome}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>
              <Logo />
              <Naming />
            </Link>

            {isAuthorized ? (
              <Link href={"/profile"}>
              <button className={styles.login}>Профиль</button>
            </Link>
            ) : (
              <>
                <NavBar />
                <Link href={"/login"}>
                  <button className={styles.login}>Войти</button>
                </Link>
              </>
            )}
          </div>
        </header>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Путешествуйте с удовольствием, выбирайте TrusTTravel !
          </h1>
          <Navigation />
        </div>
      </div>
    </section>
  );
};

export default Header;
