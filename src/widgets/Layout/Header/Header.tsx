"use client";

import React, { ReactNode, useState } from "react";
import styles from "./Header.module.sass";
import { Logo, Naming } from "@/shared/ui/Icon/Icon";
import NavBar from "@/entities/Navbar/Navbar";
// import Navigation from "@/features/Navigation/ui/Navigation";
import Link from "next/link";
import useSession from "@/shared/hooks/useSession";
import { MenuOutlined } from "@ant-design/icons";
import FindTour from "@/features/FindTour/ui/FindTour";
import { Switch } from "@/features/Switch/ui/Switch";

interface MyComponentProps {
  children?: ReactNode;
  type?: "login" | "profile";
}

const Header: React.FC<MyComponentProps> = ({ type, children }) => {
  const { getToken, isAuthorized } = useSession();
  const token = getToken();

  const [navbar, setNavbar] = useState(false);

  return (
    <section className={styles.welcome}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.inner}>
            <Link href="/" className={styles.logo}>
              <Logo />
              <Naming />
            </Link>
            <div className={styles.block}>
              {isAuthorized ? (
                <>
                  {/* <Link href={"/profile"}>
                    <button className={styles.login}>Профиль</button>
                  </Link> */}
                </>
              ) : (
                <>
                  <NavBar />
                  {/* <Link href={"/login"}>
                    <button className={styles.login}>Войти</button>
                  </Link> */}
                </>
              )}
            </div>

            <div className={styles.menu}>
              <MenuOutlined
                style={{ fontSize: "26px" }}
                onClick={() => setNavbar(!navbar)}
              />
              {navbar ? (
                <div className={styles.show}>
                  {isAuthorized ? (
                    <>
                      {/* <Link href={"/profile"}>
                      <button className={styles.login}>Профиль</button>
                    </Link> */}
                    </>
                  ) : (
                    <>
                      <nav className={styles.nav}>
                        <Link className={styles.link} href={"#about"}>
                          О нас
                        </Link>
                        <Link className={styles.link} href={"#advantage"}>
                          Преимущества
                        </Link>
                        <Link className={styles.link} href={"#game"}>
                          Геймификация
                        </Link>
                        <Link className={styles.link} href={"#roadmap"}>
                          Дорожная карта
                        </Link>
                      </nav>
                      {/* <Link href={"/login"}>
                        <button className={styles.login}>Войти</button>
                      </Link> */}
                    </>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </header>
      {type != "login" ? (
        <>
          <div className="container">
            <div className={styles.wrapper}>
              <h1 className={styles.title}>
                Путешествуйте с удовольствием, выбирайте TrusTTravel !
              </h1>
              <div className={styles.switch}>
                <Switch />
              </div>
              <div className={styles.desc}>
                <FindTour />
              </div>
            </div>
          </div>
          <div className={styles.mobile}>
            <img src="" alt="" />
            <Switch />
            <FindTour />
          </div>
        </>
      ) : (
        <div className="container">
          <div className={styles.wrapper}>{children}</div>
        </div>
      )}
    </section>
  );
};

export default Header;
