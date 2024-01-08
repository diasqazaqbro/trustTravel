import cn from "classnames";
import React, { FC } from "react";
import style from './Navbar.module.sass'
import Link from "next/link";

interface NavbarProps {
  className?: string;
}

const NavBar: FC<NavbarProps> = (props) => {
  const {className} = props

  return (
    <nav className={style.nav}>
      <Link className={cn(className, style.active, "active")} href={"#about"}>О нас</Link>
      <Link className={cn(className, style.link, "link")} href={"#advantage"}>Преимущества</Link>
      <Link className={cn(className, style.link, "link")} href={"#game"}>Геймификация</Link>
      <Link className={cn(className, style.link, "link")} href={"#roadmap"}>Дорожная карта</Link>
    </nav>
  );
};


export default NavBar;
