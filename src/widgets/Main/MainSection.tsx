import React from "react";
import styles from "./MainSection.module.sass";
import { Arrow, Success } from "@/shared/ui/Icon/Icon";
import Image from "next/image";
import { Carousel } from "antd";
import Title from "@/shared/ui/Title/Title";
import TitleCenter from "@/shared/ui/Title/TitleCenter";
const MainSection = () => {
  const contentStyle: React.CSSProperties = {
    height: "205",
    color: "#fff",
    background: "#364d79",
    borderRadius: "20px",
  };
  return (
    <main className={styles.main}>
      <section id="about" className={styles.about}>
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
            <div className={styles.img}>
              <div className={styles.alt}>Trip to Akbulak</div>
            </div>
          </div>
        </div>
      </section>
      <section id="advantage" className={styles.advantage}>
        <div className={"container"}>
          <Title text={"Преимущества"} />
          <div className={styles.inner}>
            <div className={styles.images}>
              <div className={styles.img__one}>
                <div className={styles.alt}>Trip to Charyn</div>
              </div>
              <div className={styles.img__two}>
                <div className={styles.alt}>Trip to Big Almaty Lake</div>
              </div>
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
      <section id="game" className={styles.game}>
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
      {/* <section id="system" className={styles.system}>
        <div className={"container"}>
          <h1 className={styles.title}>
            Система <b>подбора</b> туров
          </h1>
          <p>
            Команда TrusTTravel подготовила новый фильтр рекомендаций туров.
            Теперь они находятся еще быстрее и каждый сможет найти тур, который
            подойдет именно ему.
          </p>
          <div className={styles.carousel}>
            <Carousel autoplay>
              <div className={styles.images__one}>
                <div className={styles.alt}>Trip to Aksu Canyon</div>
              </div>
              <div className={styles.images__two}>
                <div className={styles.alt}>Trip to Aksu Canyon</div>
              </div>
              <div className={styles.images__three}>
                <div className={styles.alt}>Trip to Aksu Canyon</div>
              </div>
            </Carousel>
          </div>
        </div>
      </section> */}
      <section id="teams" className={styles.teams}>
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
                  src={"/images/tima.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Kurmanbekov Timur</h2>
                <h3>FullStack Developer</h3>
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/artem.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Kostin Artem</h2>
                <h3>UI/IX Designer</h3>
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/muha.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Zaytin Nurmuhammed</h2>
                <h3>SMM Specialist</h3>
              </div>
              <div className={styles.item}>
                <Image
                  src={"/images/dias.png"}
                  width={170}
                  height={170}
                  alt="staff"
                />
                <h2>Adilov Dias</h2>
                <h3>CTO</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className={styles.faq}>
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
      <section id="partners" className={styles.partners}>
        <div className={"container"}>
          <TitleCenter text="Партнеры" />
          <div className={styles.inner}>
            <div className={styles.item}>
            <img
                src={"/partners/ino.png"}
              />
            </div>
            <div className={styles.item}>
              <img
                src={"/partners/enactus.jpg"}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="roadmap" className={styles.roadmap}>
        <div className={"container"}>
          <Title text="Дорожная карта" />
          <div className={styles.inner}>
            <img
              src={"/images/roadmap.png"}
              alt="roadmap"
              style={{
                width: "100%",
                marginBottom: "50px",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
