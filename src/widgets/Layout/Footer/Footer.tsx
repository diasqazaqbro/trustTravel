import React from "react";
import style from "./Footer.module.sass";
import {
  Instagram,
  Logo,
  Naming,
  Phone,
  TikTok,
} from "@/shared/ui/Icon/Icon";

const Footer = () => {

  return (
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.inner}>
          <div className={style.block__one}>
            <div className={style.logo}>
              <Logo />
              <Naming />
            </div>
            <div className={style.contacts}>
              <h2>Контакты</h2>
              <h3>trusttravel.contact@gmail.com</h3>
              <div className={style.icons}>
                <Phone /> <Instagram /> <TikTok />
              </div>
            </div>
          </div>
          <div className={style.block__two}>
            <h5>Сервис</h5>
            <h5>О нас</h5>
            <h5>Геймификация</h5>
            <h5>Преимущества</h5>
            <h5>FAQ</h5>
          </div>
          <div className={style.block__three}>
            <h5>Легальность</h5>
            <h5>Брендинг</h5>
            <h5>Дорожная карты</h5>
            <h5>Условия пользования</h5>
            <h5>Приватность</h5>
          </div>
          <div className={style.block__four}>
            <h3>Подпишись сейчас</h3>
            <p>
              Подпишитесь на нашу рассылку, чтобы всегда быть в курсе всех
              скидок и горящих туров
            </p>
            <form>
              <input type="email" name="email" id="" />
              <button>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
