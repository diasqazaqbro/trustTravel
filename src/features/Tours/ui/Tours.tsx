"use client";

import React, { useEffect, useState } from "react";
import styles from "./Tours.module.sass";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Carousel } from "antd";
import Image from "next/image";
import { Location } from "@/shared/ui/Icon/Icon";

const Tours = () => {
  const categoryState = useSelector((state: any) => state.filtration.category);
  const locationState = useSelector((state: any) => state.filtration.location);
  const timeState = useSelector((state: any) => state.filtration.time);
  const ageState = useSelector((state: any) => state.filtration.age);

  const [places, setPlaces] = useState([]);
  useEffect(() => {
    const indexCategory = () => {
      let result = "";
      switch (categoryState) {
        case "Культурный":
          result = "culture";
          break;
        case "Веселый":
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
    const indexLocation = () => {
      let result = "";
      switch (categoryState) {
        case "Алматы":
          result = "almaty";
          break;
        case "Астана":
          result = "astana";
          break;
        case "Шымкент":
          result = "shymkent";
          break;
        case "Туркестан":
          result = "turkestan";
          break;
        default:
          result = "";
          break;
      }
      return result;
    };
    const indexTime = () => {
      let result = "";
      switch (categoryState) {
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
      switch (categoryState) {
        case "Культурный":
          result = "culture";
          break;
        case "Веселый":
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
    axios
      .get(
        `https://timkaqwerty.pythonanywhere.com/api/places/almaty?format=json&wonder=${indexCategory()}&time=${indexTime()}`
      )
      .then((response) => {
        setPlaces(response.data.results);
      });
  }, [categoryState, locationState, timeState, ageState]);
  console.log(places);
  return (
    <div className={styles.tours}>
      {places.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <div className={styles.row}>
              <img src={item.image} />
              <div className={styles.info}>
                <h2>{item.name}</h2>
                <h4><Location/> Алматы</h4>
                <p>{item.description}</p>
                <div className={styles.about}>
                    <h5><Location/> от центра {item.time} минут.</h5>
                    <h5><Location/> цена {item.price} тг.</h5>
                </div>
              </div>
            </div>

            {/* <p>{item.typeofwonder}</p>
              <p>{item.price}</p>
              <p>{item.age_type}</p>
              <p></p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
