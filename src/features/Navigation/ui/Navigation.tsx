import { ArrowJust, Category, Search } from "@/shared/ui/Icon/Icon";
import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { ageFC, categoryFC, locationFC, timeFC } from "../FiltrationSlice";
import Link from "next/link";
const Navigation = () => {
  const [showOne, setShowOne] = useState(true)
  const [showTwo, setShowTwo] = useState(true)
  const [showThree, setShowThree] = useState(true)
  const [showFour, setShowFour] = useState(true)
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [age, setAge] = useState("");

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
    setShowOne(!showOne);
  };
  const itemLocationClick = (item: string): void => {
    setLocation(item);
    setShowTwo(!showTwo);
  };
  const itemTimeClick = (item: string): void => {
    setTime(item);
    setShowThree(!showThree);
  };
  const itemAgeClick = (item: string): void => {
    setAge(item);
    setShowFour(!showFour);
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
          <div onClick={() => {setShowOne(!showOne)}} className={styles.dropdown}>
            <Category /> <h2>{category}</h2> <ArrowJust />
          </div>
          {!showOne ? <div className={styles.show}>
            <h4 onClick={() => {itemCategoryClick("Смешанный")}}>Смешанный</h4>
            <h4 onClick={() => {itemCategoryClick("Культурный")}}>Культурный</h4>
            <h4 onClick={() => {itemCategoryClick("Развлекательный")}}>Развлекательный</h4>
            <h4 onClick={() => {itemCategoryClick("Исторический")}}>Исторический</h4>
            <h4 onClick={() => {itemCategoryClick("Природный")}}>Природный</h4>
          </div> : ''}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>
          Локация
          <div onClick={() => {setShowTwo(!showTwo)}} className={styles.dropdown}>
            <Category /> <h2>{location}</h2> <ArrowJust />
          </div>
          {!showTwo ? <div className={styles.show}>
            <h4 onClick={() => {itemLocationClick("Алматы")}}>Алматы</h4>
          </div> : ''}
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.name}>
          Время от меня
          <div onClick={() => {setShowThree(!showThree)}} className={styles.dropdown}>
            <Category /> <h2>{time}</h2> <ArrowJust />
          </div>
          {!showThree ? <div className={styles.show}>
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
          <div onClick={() => {setShowFour(!showFour)}} className={styles.dropdown}>
            <Category /> <h2>{age}</h2> <ArrowJust />
          </div>
          {!showFour ? <div className={styles.show}>
            <h4 onClick={() => {itemAgeClick("Все")}}>Все</h4>
            <h4 onClick={() => {itemAgeClick("Молодые")}}>Молодые</h4>
            <h4 onClick={() => {itemAgeClick("Старые")}}>Старые</h4>
          </div> : ''}
        </div>
      </div>
      
      <Link href={'/attractions#tours'} className={styles.search} onClick={submitButton}>
        <Search />
      </Link>
    </div>
  );
};

export default Navigation;
