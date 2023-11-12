import React from "react";
import "./MainSection.sass";
import {
  Arrow,
  Instagram,
  Logo,
  Naming,
  Phone,
  Success,
  TikTok,
} from "@/shared/ui/Icon/Icon";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "antd";
const MainSection = () => {
  const contentStyle: React.CSSProperties = {
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <main className="main">
      <section className="welcome">
        <div className="container">
          <header className="header">
            <div className="inner">
              <div className="logo">
                <Logo />
                <Naming />
              </div>
              <nav className="nav">
                <Link href={""}>О нас</Link>
                <Link href={""}>Преимущества</Link>
                <Link href={""}>Геймификация</Link>
                <Link href={""}>Дорожная карта</Link>
              </nav>
              <button className="login">Войти</button>
            </div>
          </header>
          <div className="wrapper">
            <h1 className="title">
              Путешествуйте с удовольствием, выбирайте TrusTTravel !
            </h1>
            <div className="filtration">
              <div className="item">
                <div className="name">Вид туризма</div>
              </div>
              <div className="item">
                <div className="name">Вид туризма</div>
              </div>
              <div className="item">
                <div className="name">Вид туризма</div>
              </div>
              <div className="item">
                <div className="name">Вид туризма</div>
              </div>
              <button>Search</button>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <h1 className="title">О нас</h1>
          <div className="inner">
            <div className="text">
              <b>TrusTTravel</b> - Платформа, предоставление уникального опыта
              путешествий по Казахстану, предлагая выбор туров и
              достопримечательностей на основе личных предпочтений пользователя.
              Мы интегрируем геймификацию, позволяя пользователям выполнять
              туристические квесты, зарабатывать баллы и обменивать их в нашем
              магазине на уникальные награды.
            </div>
            <div className="img"></div>
          </div>
        </div>
      </section>
      <section className="advantage">
        <div className="container">
          <h1 className="title">Преимущества</h1>
          <div className="inner">
            <div className="images">
              <div className="img img__1"></div>
              <div className="img img__2"></div>
            </div>
            <div className="info">
              <div className="item">
                <Success />
                <h5>
                  Мы распространяем туризм в Казахстане и делаем его доступным.
                </h5>
              </div>
              <div className="item">
                <Success />
                <h5>
                  Мы распространяем туризм в Казахстане и делаем его доступным.
                </h5>
              </div>
              <div className="item">
                <Success />
                <h5>
                  Мы распространяем туризм в Казахстане и делаем его доступным.
                </h5>
              </div>
              <div className="item">
                <Success />
                <h5>
                  Мы распространяем туризм в Казахстане и делаем его доступным.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="game">
        <div className="container">
          <h1 className="title">Геймификация</h1>
          <div className="inner">
            <div className="images">
              <h2>Что это?</h2>
              <Image
                src={"/images/gamepad.png"}
                width={356}
                height={241}
                alt="game"
              />
            </div>
            <div className="info">
              <h3 className="text">
                1. Найдите любой понравившийся квест или достижение
              </h3>
              <h4 className="text">
                2. Вы выполняете задание. Пройдите N шагов, доберитесь до
                какого-нибудь ориентира или завершите достижение.
              </h4>
              <h5 className="text">
                3. После выполнения вам будут начислены баллы, которые вы
                сможете потратить в нашем офлайн-магазине.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className="system">
        <div className="container">
          <h1 className="title">
            Система <b>подбора</b> туров
          </h1>
          <p>
            Команда TrusTTravel подготовила новый фильтр рекомендаций туров.
            Теперь они находятся еще быстрее и каждый сможет найти тур, который
            подойдет именно ему.
          </p>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src={"/images/gamepad.png"}
                  width={356}
                  height={241}
                  alt="game"
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  src={"/images/gamepad.png"}
                  width={356}
                  height={241}
                  alt="game"
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="teams">
        <div className="container">
          <h1 className="title">Команда</h1>
          <div className="inner">
            <div className="top">
              <div className="item">
                <Image
                  src={"/images/alihan.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Tuleubaev Alikhan</h2>
                <h3>CEO & Founder</h3>
              </div>
            </div>
            <div className="bottom">
              <div className="item">
                <Image
                  src={"/images/alihan.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Tuleubaev Alikhan</h2>
                <h3>Fullstack</h3>
              </div>
              <div className="item">
                <Image
                  src={"/images/alihan.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Tuleubaev Alikhan</h2>
                <h3>UI/IX Designer</h3>
              </div>
              <div className="item">
                <Image
                  src={"/images/alihan.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Tuleubaev Alikhan</h2>
                <h3>CTO</h3>
              </div>
              <div className="item">
                <Image
                  src={"/images/alihan.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Tuleubaev Alikhan</h2>
                <h3>SMM Specialist</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="container">
          <h1 className="title">FAQ</h1>
          <div className="inner">
            <div className="item">
              <h2>
                Что можно приобрести во внутреннем магазине? <Arrow />
              </h2>
              <p>
                С помощью накопленных монет вы можете приобрести различные
                купоны, скидки и сертификаты в различные заведения. Также
                сможете купить «аватары» и скины, которые способствуют более
                высокому заработку со своими преимуществами.
              </p>
              <hr />
            </div>
            <div className="item">
              <h2>
                Что можно приобрести во внутреннем магазине? <Arrow />
              </h2>
              <p>
                С помощью накопленных монет вы можете приобрести различные
                купоны, скидки и сертификаты в различные заведения. Также
                сможете купить «аватары» и скины, которые способствуют более
                высокому заработку со своими преимуществами.
              </p>
              <hr />
            </div>
            <div className="item">
              <h2>
                Что можно приобрести во внутреннем магазине? <Arrow />
              </h2>
              <p>
                С помощью накопленных монет вы можете приобрести различные
                купоны, скидки и сертификаты в различные заведения. Также
                сможете купить «аватары» и скины, которые способствуют более
                высокому заработку со своими преимуществами.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="container">
          <h1 className="title">Партнёры</h1>
          <div className="inner">
            <div className="item">
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className="item">
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className="item">
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className="item">
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className="item">
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className="item">
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className="item">
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className="item">
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="roadmap">
        <div className="container">
          <h1 className="title">Дорожная карта</h1>
          <div className="inner">
            <Image
              src={"/images/roadmap.png"}
              width={1100}
              height={573}
              alt="roadmap"
            />
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="inner">
            <div className="block__one">
              <div className="logo">
                <Logo />
                <Naming />
              </div>
              <div className="contacts">
                <h2>Контакты</h2>
                <h3>trusttravel.contact@gmail.com</h3>
                <div className="icons">
                  <Phone /> <Instagram /> <TikTok />
                </div>
              </div>
            </div>
            <div className="block__two">
              <h5>Сервис</h5>
              <h5>Сервис</h5>
              <h5>Сервис</h5>
              <h5>Сервис</h5>
              <h5>Сервис</h5>
            </div>
            <div className="block__three">
              <h5>Сервис</h5>
              <h5>Сервис</h5>
              <h5>Сервис</h5>
              <h5>Сервис</h5>
              <h5>Сервис</h5>
            </div>
            <div className="block__four">
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
    </main>
  );
};

export default MainSection;
