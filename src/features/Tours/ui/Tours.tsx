"use client";
import React, { useEffect, useState } from "react";
import styles from "./Tours.module.sass";
import { useSelector } from "react-redux";
import axios from "axios";
import { Location } from "@/shared/ui/Icon/Icon";
import Link from "next/link";
import { Spin } from "antd";

interface Place {
  name: string;
  image: string;
  description: string;
  time: number;
  price: number;
  id: number;
}

interface RootState {
  filtration: {
    category: string;
    location: string;
    time: string;
    age: string;
  };
}

const Tours: React.FC = () => {
  const categoryState = useSelector(
    (state: RootState) => state.filtration.category
  );
  const locationState = useSelector(
    (state: RootState) => state.filtration.location
  );
  const timeState = useSelector((state: RootState) => state.filtration.time);
  const ageState = useSelector((state: RootState) => state.filtration.age);

  const [places, setPlaces] = useState<Place[]>([]);
  const [spinning, setSpinning] = React.useState<boolean>(false);

  useEffect(() => {
    const showLoader = () => {
      setSpinning(true);
      if (places.length > 0) {
        setSpinning(false);
      }
    };
    showLoader();
    const indexCategory = () => {
      let result = "";
      switch (categoryState) {
        case "Культурный":
          result = "culture";
          break;
        case "Развлекательный":
          result = "funny";
          break;
        case "Исторический":
          result = "history";
          break;
        case "Природный":
          result = "nature";
          break;
        default:
          result = "";
          break;
      }
      return result;
    };

    const indexTime = () => {
      let result = "";
      switch (timeState) {
        case "Любое":
          result = "";
          break;
        case "до 30 минут":
          result = "30";
          break;
        case "до 50 минут":
          result = "50";
          break;
        case "до 90 минут":
          result = "90";
          break;
        default:
          result = "";
          break;
      }
      return result;
    };
    const indexAge = () => {
      let result = "";
      switch (ageState) {
        case "Все":
          result = "any";
          break;
        case "Для молодых":
          result = "young";
          break;
        case "Для зрелых":
          result = "mature";
          break;
        case "Для пожилых":
          result = "middle";
          break;
        default:
          result = "any";
          break;
      }
      return result;
    };

    axios
      .get(
        `https://timkaqwerty.pythonanywhere.com/api/places/almaty?format=json&wonder=${indexCategory()}&time=${indexTime()}&age=${indexAge()}`
      )
      .then((response) => {
        setPlaces(response.data.results);
        console.log(response.data.results);
      });
  }, [categoryState, locationState, timeState, ageState, places]);

  return (
    <div id="tours" className={styles.tours}>
      <Spin spinning={spinning} fullscreen />
      {places.map((item, index) => (
        <div
          className={styles.item}
          key={index}
        >
          <div className={styles.row}>
            <img src={item.image} alt={item.name} />
            <div className={styles.info}>
              <h2>{item.name}</h2>
              <h4>
                <Location /> Алматы
              </h4>
              <p>{item.description}</p>
              <div className={styles.about}>
                <h5>
                  <Location /> от центра {item.time} минут.
                </h5>
                <h5>
                  <Location /> цена {item.price} тг.
                </h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tours;
