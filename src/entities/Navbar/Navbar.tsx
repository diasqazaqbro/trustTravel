import React from "react";
import style from './Navbar.module.sass'
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className={style.nav}>
      <Link className={style.link} href={""}>О нас</Link>
      <Link className={style.link} href={""}>Преимущества</Link>
      <Link className={style.link} href={""}>Геймификация</Link>
      <Link className={style.link} href={""}>Дорожная карта</Link>
    </nav>
  );
};

export default NavBar;
