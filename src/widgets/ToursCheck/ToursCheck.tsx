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
import Footer from '../Layout/Footer/Footer';

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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.8458744837285!2d77.11341867643065!3d43.14976567113048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38837944c34093b3%3A0xfbf8f8149131f47e!2sFurmanov%20peak!5e0!3m2!1sen!2skz!4v1704740698559!5m2!1sen!2skz"
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


      <div className={styles.mobile}>
        <section className={styles.mobile__tour_header}>
          <header className={styles.header} >
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
            <div className={styles.mobile__tour_title}>
              <h1>Тур на пик Фурманова</h1>
              <p>Туры от TrusTTravel — это возможность погрузиться в мир величественных пейзажей, где каждый шаг открывает новые грани красоты и приключений.</p>
            </div>
            <div className={styles.mobile__tour_more}>
              <h4><span>Организатор: </span> TrusTTravel</h4>
              <h4><span>Трансфер: </span> В две стороны</h4>
              <h4><span>Питиание: </span> Еда (1 раз), горячий чай</h4>
              <h4><span>Другое: </span> фотоссесия и съёмка</h4>
              <h4><span>Дата: </span> 6 января</h4>
            </div>
            <div className={styles.mobile__tour_img}>
              <Image width={310} height={186}  src={image} alt={'Tour'} className={styles.img}/>
            </div>
          </div>
        </section>

        <section className={styles.mobile__tour_info}>
          <div className={styles.container__info}>
            <div className={styles.mobile__info_title}>
              <h1>Как добраться самому ?</h1>
              <p>Попасть на территорию можно на личном автомобиле (лучше хороший подготовленный внедорожник) либо с   тур-операторами. Расстояние 60 км от Шымкента. В 28 км от поселка Жабаглы Тюлькубасского района Туркестанской области. Спуск и подъем в каньон Аксу (300 метров) - пеший.</p>
              <h4><span>Время посещения: </span> зависит от погодных условий и места назначения.</h4>
              <h4><span>Режим работы: </span> круглогодично (лучшее время года для посещения - лето и осень).</h4>
              <h4><span>Адрес: </span> Туркестанская область, Тюлькубаский район.</h4>
            </div>
            <div className={styles.map_center}>
              <div className={styles.mobile__map} >
                <h5>Достопримечательность на Карте</h5>
                <iframe className={styles.map}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.8458744837285!2d77.11341867643065!3d43.14976567113048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38837944c34093b3%3A0xfbf8f8149131f47e!2sFurmanov%20peak!5e0!3m2!1sen!2skz!4v1704740698559!5m2!1sen!2skz"
                  width="288.621px" height="157.826px" style={{ borderRadius: '20px' }} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <div className={styles.mobile__grade}>
                <h5>Оценка места: </h5>
                <BasicRating />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ToursCheck;
