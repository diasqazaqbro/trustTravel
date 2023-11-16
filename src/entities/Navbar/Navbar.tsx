import React from "react";
import style from './Navbar.module.sass'
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className={style.nav}>
      <Link className={style.link} href={"#about"}>О нас</Link>
      <Link className={style.link} href={"#advantage"}>Преимущества</Link>
      <Link className={style.link} href={"#game"}>Геймификация</Link>
      <Link className={style.link} href={"#roadmap"}>Дорожная карта</Link>
    </nav>
  );
};

export default NavBar;
