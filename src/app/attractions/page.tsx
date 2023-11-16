import TitleCenter from "@/shared/ui/Title/TitleCenter";
import Layout from "@/widgets/Layout/Layout";
import { Carousel } from "antd";
import Image from "next/image";
import style from './Attractions.module.sass'
import Title from "@/shared/ui/Title/Title";
import Tours from "@/features/Tours/ui/Tours";
export default function Attractions() {
  const contentStyle: React.CSSProperties = {
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <main>
      <Layout>
        <div className="container">
          <section className={style.attractions}>
            <TitleCenter text="Достопримечательности" />

              <Tours/>
            <Carousel style={{
              marginTop: '60px'
            }} autoplay>
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
          </section>
          <section className="tour">
            <Title text="Специальное предложения"/>
            <Title text="Туры пя"/>
            <Title text="Туры пя"/>
            <Title text="Туры пя"/>
          </section>
         
        </div>
      </Layout>
    </main>
  );
}
