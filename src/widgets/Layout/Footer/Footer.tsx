import React from "react";
import style from "./Footer.module.sass";
import {
  GMail30,
  Insta30,
  Instagram,
  Logo,
  Naming,
  Phone,
  Phone30,
  Telega30,
  Tik30,
  TikTok,
} from "@/shared/ui/Icon/Icon";
import Button from "@/shared/ui/Button/Button";

const Footer = () => {

  return (
    <>
      <footer className={style.footer}>
        <div className='container'>
          <div className={style.inner}>
            <div className={style.block__one} >
              <div className={style.logo} >
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

      <div className={style.mobile}>
        <footer className={style.footer__mobile}>
          <div className='container'>
            <div className={style.inner}>
              <h1>Контакты</h1>
              <div className={style.icon__mobile}>
                <Insta30 /> <Tik30 /> <GMail30 /> <Telega30 /> <Phone30 />
              </div>
              <div className={style.link1}>
                <a href="">О нас</a> <a href="">Дорожная Карта</a>
              </div>
              <div className={style.link2}>
                <a href="">Геймификация</a> <a href="">Преимущества</a>
              </div>
              <div className={style.link3}>
                <a href="">Условия пользования</a> <a href="">FAQ</a>
              </div>
              <div className={style.footer__input}>
                <h1>Подпишись сейчас</h1>
                <p>Подпишитесь на нашу рассылку, чтобы всегда быть в курсе всех скидок и горящих туров</p>
                <div className={style.input}>
                < input type="email" placeholder="Email" name="email" />
                </div>
                <div className={style.send}>
                  <div className={style.btn__send}>
                    <button>Отправить</button>     
                  </div>
                  <div className={style.logo__mobile}>
                    <Logo /> <Naming />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
