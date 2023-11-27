"use client";

import Layout from "@/widgets/Layout/Layout";
import axios from "axios";
import styles from "./AttractionsItem.module.sass";
import { useEffect, useState } from "react";
import SpecialPlace from "@/features/SpecialPlace/ui/SpecialPlace";
import { Grid, Spin } from "antd";
import { BarsOutlined, FilterOutlined, MenuOutlined } from "@ant-design/icons";
import { GridIcon, Location } from "@/shared/ui/Icon/Icon";
import Link from "next/link";
interface IPlace {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ITour {
  amount_of_people: number;
  date: string;
  description: string;
  id: number;
  image: string;
  name: string;
  place: number;
  price: number;
  rooms: number;
}

export default function Place({ params }: { params: { id: number } }) {
  const [info, setInfo] = useState<IPlace[]>([]);
  const [tours, setTours] = useState<ITour[]>([]);
  const [spinning, setSpinning] = useState<boolean>(false);
  const [view, setView] = useState("menu");
  useEffect(() => {
    const showLoader = () => {
      setSpinning(true);
      if (tours.length > 0) {
        setSpinning(false);
      }
    };
    showLoader();
    axios
      .get<{ results: IPlace[] }>(
        `https://timkaqwerty.pythonanywhere.com/api/places/almaty?format=json`
      )
      .then((response) => {
        let result: Array<IPlace> = response.data.results;
        let afterFiltration = result.filter((item) => item.id == params.id);
        setInfo(afterFiltration);
      });
    axios
      .get<{ results: ITour[] }>(
        `https://timkaqwerty.pythonanywhere.com/api/tours_by_place/${params.id}`
      )
      .then((response) => {
        let result: Array<ITour> = response.data.results;
        setTours(result);
      });
  }, [params.id, tours.length]);

  const viewMenu = () => {};

  const viewGrid = () => {};

  return (
    <main className={styles.attractions}>
      <Spin spinning={spinning} fullscreen />
      <Layout>
        {/* <div className={styles.info}></div> */}

        <div className="container">
          <SpecialPlace />
          <h2>Туры до {info.length > 0 ? info[0].name : ""}</h2>
          <div className={styles.filter}>
            <div className={styles.one}>
              <h3>
                Высокий рейтинг <FilterOutlined style={{ fontSize: "20px" }} />
              </h3>
            </div>
            <div className={styles.two}>
              <span onClick={viewMenu}>
                <MenuOutlined style={{ fontSize: "31px" }} />
              </span>
              <span onClick={viewGrid}>
                <GridIcon />
              </span>
            </div>
          </div>
          <div className={styles.menu}>
            {tours.length > 0
              ? tours.map((item, index) => {
                  return (
                    <Link href={`/`} className={styles.item} key={index}>
                      <div className={styles.row}>
                        <img src={item.image} alt={item.name} />
                        <div className={styles.info}>
                          <h2>{item.name}</h2>
                          <h4>
                             Алматы
                          </h4>
                          <p>{item.description}</p>
                          <div className={styles.about}>
                            <h5>
                               от центра минут.
                            </h5>
                            <h5>
                               цена {item.price} тг.
                            </h5>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : ""}
          </div>
          <div className={styles.grid}>
            {tours.length > 0
              ? tours.map((item, index) => {
                  return (
                    <div className={styles.item} key={index}>
                      {item.name}
                    </div>
                  );
                })
              : ""}
          </div>
          {tours.length > 0
            ? tours.map((item, index) => {
                return <div key={index}>{item.name}</div>;
              })
            : ""}
        </div>
      </Layout>
    </main>
  );
}
