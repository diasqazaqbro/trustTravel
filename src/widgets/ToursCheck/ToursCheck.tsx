"use client";

import { useState } from 'react';
import Link from 'next/link';
import image from '../../../public/images/tour_img.png'
import styles from './ToursCheck.module.sass';
import NavBar from '@/entities/Navbar/Navbar';
import { Logo, Naming } from '@/shared/ui/Icon/Icon';
import { MenuOutlined } from '@ant-design/icons';
import Button from '@/shared/ui/Button/Button';
import BasicRating from '@/shared/ui/Rating/Rating';
import Title from '@/shared/ui/Title/Title';
import Image from 'next/image';

const ToursCheck = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <section className={styles.tour__header}>
        <header className={styles.header}>
          <div className="container">
            <div className={styles.inner}>
              <div className={styles.logo}>
                <Link href="/" className={styles.link}>
                  <Logo />
                  <Naming />
                </Link>
              </div>
              <div className={styles.block}>
                <NavBar className={styles.nav__link}/>
              </div>

              <div className={styles.menu}>
                <MenuOutlined
                  style={{ fontSize: '26px' }}
                  onClick={() => setNavbar(!navbar)}
                />
                {navbar ? (
                  <div className={styles.show}>
                    <nav className={styles.nav}>
                      <Link className={styles.link} href="#about">
                        О нас
                      </Link>
                      <Link className={styles.link} href="#advantage">
                        Преимущества
                      </Link>
                      <Link className={styles.link} href="#game">
                        Геймификация
                      </Link>
                      <Link className={styles.link} href="#roadmap">
                        Дорожная карта
                      </Link>
                    </nav>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </header>

        <div className='container'>
          <div className={styles.tour__title}>
            <div className={styles.tour__desc}>
              <h1>Тур на пик Фурманова</h1>
              <p>Туры от TrustTravel — это возможность погрузиться в мир величественных пейзажей, где каждый шаг открывает новые грани красоты и приключений. Вы ощутите мощь природы и переполняющее чувство свободы, ступая по древним тропам и изучая живописные уголки горных хребтов. </p>
            </div>
            {/* Grid */}
            <div className={styles.tour__buy}>
              <Image src={image} alt={'Tour'} />
              <div className={styles.tour__cost}>
                <h5>Цена: </h5>
                <h1>12 000 ₸</h1>
              </div>
              <div className={styles.tour__buy_btn}>
                <Button className={styles.tour__buying} text='Купить' disabled={false} />
                <Button className={styles.tour__basket} text='Корзина' disabled={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tour__info}>
        <div className='container'>
          <div className={styles.tour__info_help}>
            <div className={styles.tour__help_left}>
              <h1>Как добраться самому ?</h1>
              <p>Попасть на территорию можно на личном автомобиле (лучше хороший подготовленный внедорожник) либо с   тур-операторами. Расстояние 60 км от Шымкента. В 28 км от поселка Жабаглы Тюлькубасского района Туркестанской области. Спуск и подъем в каньон Аксу (300 метров) - пеший.</p>
              <h4><span>Время посещения: </span> зависит от погодных условий и места назначения.</h4>
              <h4><span>Режим работы: </span> круглогодично (лучшее время года для посещения - лето и осень).</h4>
              <h4><span>Адрес: </span> Туркестанская область, Тюлькубаский район.</h4>
            </div>
            {/* Grid */}
            <div className={styles.tour__help_right}>
              <div className={styles.tour__map}>
                <h1>Достопримечательность на Карте</h1>
                <div className={styles.tour__sight_map}>
                  <iframe className={styles.map}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.06213256443!2d-74.30931925978655!3d40.69701931036749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodCo0JA!5e0!3m2!1sru!2skz!4v1699030719495!5m2!1sru!2skz"
                    width="430px" height="235px" style={{ borderRadius: '20px' }} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
              <div className={styles.tour__grade}>
                <h5>Оценка тура:</h5>
                <BasicRating />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default ToursCheck;

