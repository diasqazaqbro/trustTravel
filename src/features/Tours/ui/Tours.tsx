"use client";

import React, { useEffect, useState } from "react";
import styles from "./Tours.module.sass";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

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
    const indexTime= () => {
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
    const indexAge= () => {
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
  }, [categoryState,locationState, timeState, ageState]);
  return (
    <div className={styles.tours}>
      {categoryState}
      {locationState}
      {timeState}
      {ageState}

      <div>
        {places.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <p>{item.typeofwonder}</p>
              <p>{item.price}</p>
              <p>{item.age_type}</p>
              <p>{item.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
