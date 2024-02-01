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
import ToursCheck from "@/widgets/ToursCheck/ToursCheck";

export interface IPlace {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  time: number;
}

export interface ITour {
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

  return (
    <main className={styles.attractions}>
      <Spin spinning={spinning} fullscreen />
     {info ?  <ToursCheck info={info} tours={tours} /> : ''}
    </main>
  );
}
