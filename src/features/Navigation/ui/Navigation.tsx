import { ArrowJust, Category, Search } from "@/shared/ui/Icon/Icon";
import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { ageFC, categoryFC, locationFC, timeFC } from "../FiltrationSlice";
import Link from "next/link";
const Navigation = () => {
  const [show, setShow] = useState(true)
  const [category, setCategory] = useState("Смешанный");
  const [location, setLocation] = useState("Смешанный");
  const [time, setTime] = useState("Смешанный");
  const [age, setAge] = useState("Смешанный");
  const categoryState = useSelector((state:any) => state.filtration.category);
  const locationState = useSelector((state:any) => state.filtration.location);
  const timeState = useSelector((state:any) => state.filtration.time);
  const ageState = useSelector((state:any) => state.filtration.age);
  const dispatch = useDispatch();

  
  useEffect(() => {
    setCategory(categoryState)
    setLocation(locationState)
    setTime(timeState)
    setAge(ageState)
  }, [])


  const itemCategoryClick = (item: string): void => {
    setCategory(item);
    setShow(!show);
  };
  const itemLocationClick = (item: string): void => {
    setLocation(item);
    setShow(!show);
  };
  const itemTimeClick = (item: string): void => {
    setTime(item);
    setShow(!show);
  };
  const itemAgeClick = (item: string): void => {
    setAge(item);
    setShow(!show);
  };

  const submitButton = () => {
    dispatch(categoryFC(category));
    dispatch(locationFC(location));
    dispatch(timeFC(time));
    dispatch(ageFC(age));
  }
  
  // culture,funny,history,nature
  return (
    <div className={styles.filtration}>
      <div className={styles.item}>
        <div className={styles.name}>
          Вид туризма
          <div onClick={() => {setShow(!show)}} className={styles.dropdown}>
            <Category /> <h2>{category}</h2> <ArrowJust />
          </div>
          {!show ? <div className={styles.one}>
            <h4 onClick={() => {itemCategoryClick("Смешанный")}}>Смешанный</h4>
            <h4 onClick={() => {itemCategoryClick("Культурный")}}>Культурный</h4>
            <h4 onClick={() => {itemCategoryClick("Веселый")}}>Веселый</h4>
            <h4 onClick={() => {itemCategoryClick("Исторический")}}>Исторический</h4>
            <h4 onClick={() => {itemCategoryClick("Природный")}}>Природный</h4>
          </div> : ''}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>
          Локация
          <div onClick={() => {setShow(!show)}} className={styles.dropdown}>
            <Category /> <h2>{location}</h2> <ArrowJust />
          </div>
          {!show ? <div className={styles.two}>
            <h4 onClick={() => {itemLocationClick("Алматы")}}>Алматы</h4>
            <h4 onClick={() => {itemLocationClick("Астана")}}>Астана</h4>
            <h4 onClick={() => {itemLocationClick("Шымкент")}}>Шымкент</h4>
            <h4 onClick={() => {itemLocationClick("Туркестан")}}>Туркестан</h4>
          </div> : ''}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>
          Время от меня
          <div onClick={() => {setShow(!show)}} className={styles.dropdown}>
            <Category /> <h2>{time}</h2> <ArrowJust />
          </div>
          {!show ? <div className={styles.three}>
            <h4 onClick={() => {itemTimeClick("Любое")}}>Любое</h4>
            <h4 onClick={() => {itemTimeClick("до 30 минут")}}>до 30 минут</h4>
            <h4 onClick={() => {itemTimeClick("до 50 минут")}}>до 50 минут</h4>
            <h4 onClick={() => {itemTimeClick("до 90 минут")}}>до 90 минут</h4>
          </div> : ''}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>
          Возраст
          <div onClick={() => {setShow(!show)}} className={styles.dropdown}>
            <Category /> <h2>{age}</h2> <ArrowJust />
          </div>
          {!show ? <div className={styles.four}>
            <h4 onClick={() => {itemAgeClick("Все")}}>Все</h4>
            <h4 onClick={() => {itemAgeClick("Молодые")}}>Молодые</h4>
            <h4 onClick={() => {itemAgeClick("Старые")}}>Старые</h4>

          </div> : ''}
        </div>
      </div>
      
      <Link href={'/attractions'} className={styles.search} onClick={submitButton}>
        <Search />
      </Link>
    </div>
  );
};

export default Navigation;
