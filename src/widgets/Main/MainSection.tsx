import React from "react";
import styles from "./MainSection.module.sass";
import { Arrow, Success } from "@/shared/ui/Icon/Icon";
import Image from "next/image";
import { Carousel } from "antd";
import Title from "@/shared/ui/Title/Title";
import TitleCenter from "@/shared/ui/Title/TitleCenter";
const MainSection = () => {
  const contentStyle: React.CSSProperties = {
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <main className={styles.main}>
      <section className={styles.about}>
        <div className={"container"}>
          <Title text={"О нас"} />
          <div className={styles.inner}>
            <div className={styles.text}>
              <b>TrusTTravel</b> - Платформа, предоставление уникального опыта
              путешествий по Казахстану, предлагая выбор туров и
              достопримечательностей на основе личных предпочтений пользователя.
              Мы интегрируем геймификацию, позволяя пользователям выполнять
              туристические квесты, зарабатывать баллы и обменивать их в нашем
              магазине на уникальные награды.
            </div>
            <div className={styles.img}></div>
          </div>
        </div>
      </section>
      <section className={styles.advantage}>
        <div className={"container"}>
          <Title text={"Преимущества"} />
          <div className={styles.inner}>
            <div className={styles.images}>
              <div className={styles.img + styles.img__1}></div>
              <div className={styles.img + styles.img__2}></div>
            </div>
            <div className={styles.info}>
              <div className={styles.item}>
                <Success />
                <h5>
                  Мы распространяем туризм в Казахстане и делаем его доступным.
                </h5>
              </div>
              <div className={styles.item}>
                <Success />
                <h5>
                  Мы распространяем туризм в Казахстане и делаем его доступным.
                </h5>
              </div>
              <div className={styles.item}>
                <Success />
                <h5>
                  Мы распространяем туризм в Казахстане и делаем его доступным.
                </h5>
              </div>
              <div className={styles.item}>
                <Success />
                <h5>
                  Мы распространяем туризм в Казахстане и делаем его доступным.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.game}>
        <div className={"container"}>
          <Title color="primary" text={"Геймификация"} />
          <div className={styles.inner}>
            <div className={styles.images}>
              <h2>Что это?</h2>
              <Image
                src={"/images/gamepad.png"}
                width={356}
                height={241}
                alt="game"
              />
            </div>
            <div className={styles.info}>
              <h3 className={styles.text}>
                1. Найдите любой понравившийся квест или достижение
              </h3>
              <h4 className={styles.text}>
                2. Вы выполняете задание. Пройдите N шагов, доберитесь до
                какого-нибудь ориентира или завершите достижение.
              </h4>
              <h5 className={styles.text}>
                3. После выполнения вам будут начислены баллы, которые вы
                сможете потратить в нашем офлайн-магазине.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.system}>
        <div className={"container"}>
          <h1 className={styles.title}>
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
      <section className={styles.teams}>
        <div className={"container"}>
          <TitleCenter text="Команда" />
          <div className={styles.inner}>
            <div className={styles.top}>
              <div className={styles.item}>
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
            <div className={styles.bottom}>
              <div className={styles.item}>
                <Image
                  src={"/images/alihan.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Tuleubaev Alikhan</h2>
                <h3>Fullstack</h3>
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/alihan.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Tuleubaev Alikhan</h2>
                <h3>UI/IX Designer</h3>
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/alihan.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Tuleubaev Alikhan</h2>
                <h3>CTO</h3>
              </div>
              <div className={styles.item}>
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
      <section className={styles.faq}>
        <div className={"container"}>
          <TitleCenter text="FAQ" />
          <div className={styles.inner}>
            <div className={styles.item}>
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
            <div className={styles.item}>
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
            <div className={styles.item}>
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
      <section className={styles.partners}>
        <div className={"container"}>
          <TitleCenter text="Партнеры" />
          <div className={styles.inner}>
            <div className={styles.item}>
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className={styles.item}>
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className={styles.item}>
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className={styles.item}>
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className={styles.item}>
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className={styles.item}>
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className={styles.item}>
              <Image
                width={160}
                height={160}
                alt="partners"
                src={"/images/easygroup.png"}
              />
            </div>
            <div className={styles.item}>
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
      <section className={styles.roadmap}>
        <div className={"container"}>
          <Title text="Дорожная карта" />
          <div className={styles.inner}>
            <img
              src={"/images/roadmap.png"}
              alt="roadmap"
              style={{
                width: '100%',
                marginBottom: '50px'
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
