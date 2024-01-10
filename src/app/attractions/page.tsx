import TitleCenter from "@/shared/ui/Title/TitleCenter";
import Layout from "@/widgets/Layout/Layout";
import style from "./Attractions.module.sass";
import Tours from "@/features/Tours/ui/Tours";
export default function Attractions() {
  return (
    <main>
      <Layout>
        <div className="container">
          <section className={style.attractions}>
            <h1 className={style.attractions__title}>Достопримечательности</h1>
            <Tours/>
          </section>
        </div>
      </Layout>
    </main>
  );
}
