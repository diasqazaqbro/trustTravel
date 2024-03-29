import { ArrowJust, Backpack, Calendar, Category, Map, Search, SearchMobile } from "@/shared/ui/Icon/Icon";
import React, { useEffect, useState } from "react";
import './FindTour.scss';
import { useDispatch, useSelector } from "react-redux";
import { ageFC, categoryFC, locationFC, timeFC } from "../FiltrationSlice";
import Link from "next/link";
// import { Modal } from "@/shared/ui/Modal/Modal";
const FindTour = () => {
  // const [modalActive, setModalActive] = useState(false)
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(true);
  const [showThree, setShowThree] = useState(true);
  const [showFour, setShowFour] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [age, setAge] = useState("");

  const categoryState = useSelector((state: any) => state.filtration.category);
  const locationState = useSelector((state: any) => state.filtration.location);
  const timeState = useSelector((state: any) => state.filtration.time);
  const ageState = useSelector((state: any) => state.filtration.age);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategory(categoryState);
    setLocation(locationState);
    setTime(timeState);
    setAge(ageState);
  }, []);

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
  // const toogleModal = () => {
  //   setModalActive(!modalActive)
  // };

  const itemCategoryClickTest = (item: string): void => {
    if (activeCategory === item) {
      setActiveCategory(null)
    }
    else {
      setActiveCategory(item)
    }
  }

  const submitButton = () => {
    dispatch(categoryFC(category));
    dispatch(locationFC(location));
    dispatch(timeFC(time));
    dispatch(ageFC(age));
  };

  // culture,funny,history,nature
  return (
    <>
      <div className='filtration'>
        <div className='item'>
          <div className='name'>
            Вид туризма
            <div
              onClick={() => {
                setShowOne(!showOne);
              }}
              className='dropdown'
            >
              <Category /> <h2>{category}</h2> <ArrowJust />
            </div>
            {!showOne ? (
              <div className='show'>
                <h4
                  onClick={() => {
                    itemCategoryClick("Смешанный");
                  }}
                >
                  Смешанный
                </h4>
                <h4
                  onClick={() => {
                    itemCategoryClick("Пеший");
                  }}
                >
                  Пеший
                </h4>
                <h4
                  onClick={() => {
                    itemCategoryClick("Авто");
                  }}
                >
                  Авто
                </h4>
                <h4
                  onClick={() => {
                    itemCategoryClick("Водный");
                  }}
                >
                  Водный
                </h4>
                <h4
                  onClick={() => {
                    itemCategoryClick("Воздушный");
                  }}
                >
                  Воздушный
                </h4>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className='item'>
          <div className='name'>
            Локация
            <div
              onClick={() => {
                setShowTwo(!showTwo);
              }}
              className='dropdown'
            >
              <Map /> <h2>{location}</h2> <ArrowJust />
            </div>
            {!showTwo ? (
              <div className='show'>
                <h4
                  onClick={() => {
                    itemLocationClick("Алматы");
                  }}
                >
                  Алматы
                </h4>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className='item'>
          <div className='name'>
            Время от меня
            <div
              onClick={() => {
                setShowThree(!showThree);
              }}
              className='dropdown'
            >
              <Calendar /> <h2>{time}</h2> <ArrowJust />
            </div>
            {!showThree ? (
              <div className='show'>
                <h4
                  onClick={() => {
                    itemTimeClick("Любое");
                  }}
                >
                  Любое
                </h4>
                <h4
                  onClick={() => {
                    itemTimeClick("до 30 минут");
                  }}
                >
                  до 30 минут
                </h4>
                <h4
                  onClick={() => {
                    itemTimeClick("до 50 минут");
                  }}
                >
                  до 50 минут
                </h4>
                <h4
                  onClick={() => {
                    itemTimeClick("до 90 минут");
                  }}
                >
                  до 90 минут
                </h4>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className='item'>
          <div className='name'>
            Уровень сложности
            <div
              onClick={() => {
                setShowFour(!showFour);
              }}
              className='dropdown'
            >
              <Backpack /> <h2>{age}</h2> <ArrowJust />
            </div>
            {!showFour ? (
              <div className='show'>
                <h4
                  onClick={() => {
                    itemAgeClick("Сложно");
                  }}
                >
                  Сложно
                </h4>
                <h4
                  onClick={() => {
                    itemAgeClick("Легко");
                  }}
                >
                  Легко
                </h4>
                <h4
                  onClick={() => {
                    itemAgeClick("Средний");
                  }}
                >
                  Средний
                </h4>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <Link
          href={"/attractions#tours"}
          className='search'
          onClick={submitButton}
        >
          <Search />
        </Link>
      </div>

      <div className="tablet">
        <Link
          href={"/attractions#tours"}
          className='search__tablet'
          onClick={submitButton}
        >
          <SearchMobile />
        </Link>
      </div>

      <div className='mobile'>
        <div className='filtration'>
          <div className=""> 
          {/* Первая колонка */}
          <div className="first__col">
            <div className="choice__col">
              <div className='block'>
                <div className='name'>
                  Вид туризма
                  <div
                    onClick={() => {
                      // setShowOne(!showOne);
                      itemCategoryClickTest('Вид туризма')
                    }}
                    className='dropdown'  
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.0777 2.35314C19.0777 1.34817 18.3049 0.533356 17.3511 0.533356H6.55862C5.60489 0.533356 4.83203 1.34817 4.83203 2.35314C4.83203 3.35812 5.60489 4.17293 6.55862 4.17293H17.3511C18.3049 4.17293 19.0777 3.35812 19.0777 2.35314ZM18.2144 2.35314C18.2144 2.85586 17.8278 3.26304 17.3511 3.26304H6.55862C6.08197 3.26304 5.69532 2.85586 5.69532 2.35314C5.69532 1.85043 6.08197 1.44325 6.55862 1.44325H17.3511C17.8278 1.44325 18.2144 1.85043 18.2144 2.35314Z"
                        fill="black"
                      />
                      <mask id="path-2-inside-1_593_1176" fill="white">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.0777 7.72245C19.0777 6.67122 18.3049 5.81891 17.3511 5.81891H6.55862C5.60489 5.81891 4.83203 6.67122 4.83203 7.72245C4.83203 8.77368 5.60489 9.626 6.55862 9.626H17.3511C18.3049 9.626 19.0777 8.77368 19.0777 7.72245ZM18.2144 7.72245C18.2144 8.24831 17.8278 8.67422 17.3511 8.67422H6.55862C6.08197 8.67422 5.69532 8.24831 5.69532 7.72245C5.69532 7.1966 6.08197 6.77068 6.55862 6.77068H17.3511C17.8278 6.77068 18.2144 7.1966 18.2144 7.72245Z"
                        />
                      </mask>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.0777 7.72245C19.0777 6.67122 18.3049 5.81891 17.3511 5.81891H6.55862C5.60489 5.81891 4.83203 6.67122 4.83203 7.72245C4.83203 8.77368 5.60489 9.626 6.55862 9.626H17.3511C18.3049 9.626 19.0777 8.77368 19.0777 7.72245ZM18.2144 7.72245C18.2144 8.24831 17.8278 8.67422 17.3511 8.67422H6.55862C6.08197 8.67422 5.69532 8.24831 5.69532 7.72245C5.69532 7.1966 6.08197 6.77068 6.55862 6.77068H17.3511C17.8278 6.77068 18.2144 7.1966 18.2144 7.72245Z"
                        fill="black"
                      />
                      <path
                        d="M20.0777 7.72245C20.0777 6.21307 18.9468 4.81891 17.3511 4.81891V6.81891C17.6629 6.81891 18.0777 7.12937 18.0777 7.72245H20.0777ZM17.3511 4.81891H6.55862V6.81891H17.3511V4.81891ZM6.55862 4.81891C4.96295 4.81891 3.83203 6.21307 3.83203 7.72245H5.83203C5.83203 7.12937 6.24682 6.81891 6.55862 6.81891V4.81891ZM3.83203 7.72245C3.83203 9.23184 4.96295 10.626 6.55862 10.626V8.626C6.24682 8.626 5.83203 8.31553 5.83203 7.72245H3.83203ZM6.55862 10.626H17.3511V8.626H6.55862V10.626ZM17.3511 10.626C18.9468 10.626 20.0777 9.23184 20.0777 7.72245H18.0777C18.0777 8.31553 17.6629 8.626 17.3511 8.626V10.626ZM17.2144 7.72245C17.2144 7.73987 17.2083 7.73752 17.2209 7.7236C17.2276 7.71623 17.2413 7.70398 17.2646 7.69311C17.289 7.68173 17.3193 7.67422 17.3511 7.67422V9.67422C18.4694 9.67422 19.2144 8.70679 19.2144 7.72245H17.2144ZM17.3511 7.67422H6.55862V9.67422H17.3511V7.67422ZM6.55862 7.67422C6.59048 7.67422 6.62077 7.68173 6.64517 7.69311C6.66848 7.70397 6.68215 7.71623 6.68883 7.72359C6.70145 7.73751 6.69532 7.73986 6.69532 7.72245H4.69532C4.69532 8.70681 5.44036 9.67422 6.55862 9.67422V7.67422ZM6.69532 7.72245C6.69532 7.70505 6.70145 7.7074 6.68883 7.72131C6.68215 7.72868 6.66848 7.74093 6.64517 7.7518C6.62077 7.76317 6.59048 7.77068 6.55862 7.77068V5.77068C5.44036 5.77068 4.69532 6.73809 4.69532 7.72245H6.69532ZM6.55862 7.77068H17.3511V5.77068H6.55862V7.77068ZM17.3511 7.77068C17.3193 7.77068 17.289 7.76317 17.2646 7.7518C17.2413 7.74093 17.2276 7.72867 17.2209 7.7213C17.2083 7.70739 17.2144 7.70504 17.2144 7.72245H19.2144C19.2144 6.73811 18.4694 5.77068 17.3511 5.77068V7.77068Z"
                        fill="black"
                        mask="url(#path-2-inside-1_593_1176)"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.0777 13.2596C19.0777 12.2546 18.3049 11.4398 17.3511 11.4398H6.55862C5.60489 11.4398 4.83203 12.2546 4.83203 13.2596C4.83203 14.2646 5.60489 15.0794 6.55862 15.0794H17.3511C18.3049 15.0794 19.0777 14.2646 19.0777 13.2596ZM18.2144 13.2596C18.2144 13.7623 17.8278 14.1695 17.3511 14.1695H6.55862C6.08197 14.1695 5.69532 13.7623 5.69532 13.2596C5.69532 12.7569 6.08197 12.3497 6.55862 12.3497H17.3511C17.8278 12.3497 18.2144 12.7569 18.2144 13.2596Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.02038 0.286621C0.948046 0.286621 0.078125 1.20336 0.078125 2.3334C0.078125 3.46291 0.948046 4.38018 2.02038 4.38018C3.0922 4.38018 3.96263 3.46291 3.96263 2.3334C3.96263 1.20336 3.0922 0.286621 2.02038 0.286621ZM2.02038 1.19596C2.61606 1.19596 3.09924 1.70566 3.09924 2.3334C3.09924 2.96114 2.61606 3.47033 2.02038 3.47033C1.42469 3.47033 0.941021 2.96114 0.941021 2.3334C0.941021 1.70566 1.42469 1.19596 2.02038 1.19596Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.02038 5.73996C0.948046 5.73996 0.078125 6.6567 0.078125 7.78674C0.078125 8.91625 0.948046 9.83352 2.02038 9.83352C3.0922 9.83352 3.96263 8.91625 3.96263 7.78674C3.96263 6.6567 3.0922 5.73996 2.02038 5.73996ZM2.02038 6.6493C2.61606 6.6493 3.09924 7.159 3.09924 7.78674C3.09924 8.41448 2.61606 8.92367 2.02038 8.92367C1.42469 8.92367 0.941021 8.41448 0.941021 7.78674C0.941021 7.159 1.42469 6.6493 2.02038 6.6493Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.02038 11.1931C0.948046 11.1931 0.078125 12.1098 0.078125 13.2398C0.078125 14.3693 0.948046 15.2866 2.02038 15.2866C3.0922 15.2866 3.96263 14.3693 3.96263 13.2398C3.96263 12.1098 3.0922 11.1931 2.02038 11.1931ZM2.02038 12.1024C2.61606 12.1024 3.09924 12.6121 3.09924 13.2398C3.09924 13.8676 2.61606 14.3768 2.02038 14.3768C1.42469 14.3768 0.941021 13.8676 0.941021 13.2398C0.941021 12.6121 1.42469 12.1024 2.02038 12.1024Z"
                        fill="black"
                      />
                    </svg>{" "}
                    <h2>{category}</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                    >
                      <mask
                        id="mask0_593_1200"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="14"
                      >
                        <rect
                          x="0.392578"
                          y="13.439"
                          width="13"
                          height="18.6196"
                          transform="rotate(-90 0.392578 13.439)"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_593_1200)">
                        <path
                          d="M17.4597 5.35247L9.70154 13.439L1.94336 5.35247L3.32044 3.91712L9.70154 10.5683L16.0826 3.91712L17.4597 5.35247Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                  {activeCategory === 'Вид туризма' && (
                    <div className='show'>
                      <h4
                        onClick={() => {
                          itemCategoryClick("Пеший");
                        }}
                      >
                        Пеший
                      </h4>
                      <h4
                        onClick={() => {
                          itemCategoryClick("Авто");
                        }}
                      >
                        Авто
                      </h4>
                      <h4
                        onClick={() => {
                          itemCategoryClick("Водный");
                        }}
                      >
                        Водный
                      </h4>
                      <h4
                        onClick={() => {
                          itemCategoryClick("Воздушный");
                        }}
                      >
                        Воздушный
                      </h4>
                      <h4
                        onClick={() => {
                          itemCategoryClick("Природный");
                        }}
                      >
                        Природный
                      </h4>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="choice__col">
              <div className='block'>
                <div className='name'>
                  Локация
                  <div
                    onClick={() => {
                      // setShowTwo(!showTwo);
                      itemCategoryClickTest('Локация')
                    }}
                    className='dropdown'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M12.5493 10.8128C12.3787 10.8139 12.2145 10.7481 12.0916 10.6297L9.31928 7.94827C8.89363 7.54102 8.55486 7.05174 8.32342 6.50996C8.09198 5.96817 7.97266 5.38511 7.97266 4.79594C7.97266 4.20677 8.09198 3.6237 8.32342 3.08192C8.55486 2.54013 8.89363 2.05086 9.31928 1.64361C10.1907 0.815052 11.347 0.353027 12.5493 0.353027C13.7516 0.353027 14.908 0.815052 15.7794 1.64361C16.205 2.05086 16.5438 2.54013 16.7752 3.08192C17.0067 3.6237 17.126 4.20677 17.126 4.79594C17.126 5.38511 17.0067 5.96817 16.7752 6.50996C16.5438 7.05174 16.205 7.54102 15.7794 7.94827L13.007 10.6297C12.8842 10.7481 12.7199 10.8139 12.5493 10.8128ZM12.5493 1.65669C11.6841 1.65139 10.851 1.98468 10.2281 2.58538C9.92821 2.87012 9.68935 3.21295 9.52613 3.59299C9.36291 3.97303 9.27874 4.38232 9.27874 4.79594C9.27874 5.20956 9.36291 5.61885 9.52613 5.99889C9.68935 6.37892 9.92821 6.72175 10.2281 7.00649L12.5493 9.24975L14.8705 7.00649C15.1704 6.72175 15.4093 6.37892 15.5725 5.99889C15.7357 5.61885 15.8199 5.20956 15.8199 4.79594C15.8199 4.38232 15.7357 3.97303 15.5725 3.59299C15.4093 3.21295 15.1704 2.87012 14.8705 2.58538C14.2468 1.98587 13.4143 1.65278 12.5493 1.65669Z" fill="black"/>
                      <path d="M5.35779 17.353C5.24325 17.3538 5.13052 17.3245 5.03087 17.268L0.453885 14.652C0.354104 14.5943 0.271317 14.5114 0.213907 14.4114C0.156496 14.3115 0.126501 14.1982 0.126958 14.083V2.31078C0.126501 2.19554 0.156496 2.08222 0.213907 1.98231C0.271317 1.88239 0.354104 1.79942 0.453885 1.7418C0.553284 1.68439 0.666037 1.65417 0.780813 1.65417C0.895588 1.65417 1.00834 1.68439 1.10774 1.7418L5.68472 4.35784C5.7845 4.41546 5.86729 4.49843 5.9247 4.59835C5.98211 4.69826 6.01211 4.81158 6.01165 4.92682V16.699C6.01211 16.8142 5.98211 16.9276 5.9247 17.0275C5.86729 17.1274 5.7845 17.2104 5.68472 17.268C5.58507 17.3245 5.47233 17.3538 5.35779 17.353ZM1.43467 13.7036L4.70394 15.5741V5.30615L1.43467 3.43568V13.7036Z" fill="black"/>
                      <path d="M5.35698 17.3529C5.24244 17.3537 5.12971 17.3244 5.03006 17.2679C4.93028 17.2103 4.84749 17.1273 4.79008 17.0274C4.73267 16.9275 4.70267 16.8142 4.70313 16.6989V4.92676C4.70267 4.81151 4.73267 4.69819 4.79008 4.59828C4.84749 4.49836 4.93028 4.41539 5.03006 4.35777L8.95318 2.11451C9.0282 2.07153 9.111 2.04386 9.19677 2.0331C9.28255 2.02234 9.36962 2.0287 9.45292 2.05181C9.53623 2.07492 9.61412 2.11433 9.68211 2.16775C9.75009 2.22117 9.8068 2.28755 9.84897 2.36304C9.93421 2.51321 9.95662 2.69101 9.91129 2.85764C9.86597 3.02427 9.7566 3.16621 9.60704 3.25249L6.01084 5.30608V15.574L9.60704 13.5139C9.68174 13.471 9.76417 13.4432 9.84962 13.4321C9.93506 13.421 10.0219 13.4269 10.105 13.4493C10.1882 13.4718 10.2662 13.5104 10.3344 13.563C10.4027 13.6156 10.4599 13.6812 10.5028 13.7559C10.5458 13.8306 10.5736 13.9131 10.5846 13.9985C10.5957 14.084 10.5898 14.1708 10.5674 14.254C10.5449 14.3372 10.5063 14.4152 10.4537 14.4834C10.4011 14.5517 10.3356 14.6089 10.2609 14.6519L5.68391 17.2679C5.58426 17.3244 5.47152 17.3537 5.35698 17.3529Z" fill="black"/>
                      <path d="M14.5121 17.353C14.3976 17.3538 14.2848 17.3245 14.1852 17.268L9.60818 14.6519C9.5084 14.5943 9.42561 14.5113 9.3682 14.4114C9.31079 14.3115 9.2808 14.1982 9.28126 14.0829V8.19686C9.28126 8.0234 9.35014 7.85705 9.47276 7.7344C9.59539 7.61175 9.7617 7.54285 9.93511 7.54285C10.1085 7.54285 10.2748 7.61175 10.3975 7.7344C10.5201 7.85705 10.589 8.0234 10.589 8.19686V13.7036L13.8582 15.5741V8.85087C13.8582 8.67741 13.9271 8.51106 14.0497 8.38841C14.1724 8.26576 14.3387 8.19686 14.5121 8.19686C14.6855 8.19686 14.8518 8.26576 14.9744 8.38841C15.0971 8.51106 15.1659 8.67741 15.1659 8.85087V16.699C15.1664 16.8142 15.1364 16.9275 15.079 17.0275C15.0216 17.1274 14.9388 17.2104 14.839 17.268C14.7394 17.3245 14.6266 17.3538 14.5121 17.353Z" fill="black"/>
                      <path d="M12.5514 6.88878C12.1634 6.88878 11.7842 6.77371 11.4616 6.55812C11.139 6.34253 10.8876 6.0361 10.7392 5.67759C10.5907 5.31907 10.5518 4.92458 10.6275 4.54398C10.7032 4.16338 10.89 3.81378 11.1644 3.53939C11.4387 3.26499 11.7882 3.07813 12.1687 3.00242C12.5492 2.92672 12.9436 2.96557 13.3021 3.11407C13.6605 3.26257 13.9668 3.51405 14.1824 3.83671C14.3979 4.15936 14.513 4.5387 14.513 4.92675C14.513 5.44712 14.3063 5.94617 13.9384 6.31412C13.5706 6.68207 13.0716 6.88878 12.5514 6.88878ZM12.5514 4.27274C12.4221 4.27274 12.2957 4.3111 12.1881 4.38296C12.0806 4.45483 11.9968 4.55697 11.9473 4.67647C11.8978 4.79598 11.8849 4.92748 11.9101 5.05434C11.9353 5.18121 11.9976 5.29774 12.0891 5.38921C12.1805 5.48067 12.297 5.54296 12.4238 5.5682C12.5507 5.59343 12.6822 5.58048 12.8016 5.53098C12.9211 5.48148 13.0232 5.39765 13.0951 5.2901C13.1669 5.18255 13.2053 5.0561 13.2053 4.92675C13.2053 4.7533 13.1364 4.58695 13.0138 4.4643C12.8911 4.34165 12.7248 4.27274 12.5514 4.27274Z" fill="black"/>
                      </svg>{" "}
                    <h2>{location}</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                    >
                      <mask
                        id="mask0_593_1200"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="14"
                      >
                        <rect
                          x="0.392578"
                          y="13.439"
                          width="13"
                          height="18.6196"
                          transform="rotate(-90 0.392578 13.439)"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_593_1200)">
                        <path
                          d="M17.4597 5.35247L9.70154 13.439L1.94336 5.35247L3.32044 3.91712L9.70154 10.5683L16.0826 3.91712L17.4597 5.35247Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                  {activeCategory === 'Локация' ? (
                    <div className='show'>
                      <h4
                        onClick={() => {
                          itemLocationClick("Алматы");
                        }}
                      >
                        Алматы
                      </h4>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Конец первой колонки */}

          {/* Начало второй колонки */}
          <div className="second__col">
            <div className="choice__col">
              <div className='block'>
                <div className='name'>
                  Время от меня
                  <div
                    onClick={() => {
                      // setShowThree(!showThree);
                      itemCategoryClickTest('Время от меня')
                    }}
                    className='dropdown'
                  >
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 1V2.25M4 2.25V3.5M4 2.25C2.34315 2.25 1 3.59315 1 5.25V15C1 16.6569 2.34315 18 4 18H9.5M12 18H13C14.6569 18 16 16.6569 16 15V6M13 2.25V3.5M13 2.25V1M13 2.25H6.5M13 2.25C14.6569 2.25 16 3.59315 16 5.25V6M16 6H3.5M9 11.5V13.5C9 14.0523 9.44771 14.5 10 14.5H12C12.5523 14.5 13 14.0523 13 13.5V11.5C13 10.9477 12.5523 10.5 12 10.5H10C9.44771 10.5 9 10.9477 9 11.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>{" "}
                    <h2>{time}</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                    >
                      <mask
                        id="mask0_593_1200"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="14"
                      >
                        <rect
                          x="0.392578"
                          y="13.439"
                          width="13"
                          height="18.6196"
                          transform="rotate(-90 0.392578 13.439)"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_593_1200)">
                        <path
                          d="M17.4597 5.35247L9.70154 13.439L1.94336 5.35247L3.32044 3.91712L9.70154 10.5683L16.0826 3.91712L17.4597 5.35247Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                  {activeCategory === 'Время от меня' ? (
                    <div className='show'>
                      <h4
                        onClick={() => {
                          itemTimeClick("Любое");
                        }}
                      >
                        Любое
                      </h4>
                      <h4
                        onClick={() => {
                          itemTimeClick("до 30 минут");
                        }}
                      >
                        до 30 минут
                      </h4>
                      <h4
                        onClick={() => {
                          itemTimeClick("до 50 минут");
                        }}
                      >
                        до 50 минут
                      </h4>
                      <h4
                        onClick={() => {
                          itemTimeClick("до 90 минут");
                        }}
                      >
                        до 90 минут
                      </h4>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>

            <div className="choice__col">
              <div className='block'>
                <div className='name'>
                  Уровень сложности
                  <div
                    onClick={() => {
                      // setShowFour(!showFour);
                      itemCategoryClickTest('Уровень сложности')
                    }}
                    className='dropdown'
                  >
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.6069 9.68235H11.6478C12.3053 9.68235 12.9592 9.53857 13.529 9.21055C14.5 8.65163 15.1714 8.11659 15.6122 7.61456M11.6069 9.68235H6.67713C6.62623 9.68235 6.57535 9.68149 6.52453 9.67975M11.6069 9.68235V8.62353M11.6069 9.68235V10.7412M6.101 3.96471H4.55949C3.90198 3.96471 3.2202 4.08132 2.73682 4.52703C1.97928 5.22555 1.56573 6.30834 2.71277 7.61456M6.101 3.96471V3.11765C6.101 1.9481 7.0491 1 8.21865 1H9.91277C11.0823 1 12.0304 1.9481 12.0304 3.11765V3.96471M6.101 3.96471H12.0304M12.0304 3.96471H13.7655C14.423 3.96471 15.1048 4.08132 15.5882 4.52703C16.3457 5.22555 16.7592 6.30833 15.6122 7.61456M6.52453 8.62353V9.67975M6.52453 9.67975V10.7412M6.52453 9.67975C5.91889 9.65899 5.32166 9.51317 4.79593 9.21055C3.82498 8.65163 3.15361 8.11659 2.71277 7.61456M2.71277 7.61456C-0.300853 11.141 0.797637 16.5601 4.94661 18.6346L5.10814 18.7154C5.15608 18.7394 5.20466 18.7619 5.25379 18.7829M15.6122 7.61456L15.725 7.7746C18.283 11.4051 17.1502 16.4504 13.2856 18.6388C12.8674 18.8755 12.3951 19 11.9146 19H6.31367C5.94879 19 5.58827 18.9259 5.25379 18.7829M1.01865 12.4353H3.13615C4.30569 12.4353 5.25379 13.3834 5.25379 14.5529V18.7829M5.25379 18.7829V18.7882M16.901 12.4353H14.9951C13.8256 12.4353 12.8775 13.3834 12.8775 14.5529V18.7882" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <h2>{age}</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                    >
                      <mask
                        id="mask0_593_1200"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="20"
                        height="14"
                      >
                        <rect
                          x="0.392578"
                          y="13.439"
                          width="13"
                          height="18.6196"
                          transform="rotate(-90 0.392578 13.439)"
                          fill="#D9D9D9"
                        />
                      </mask>
                      <g mask="url(#mask0_593_1200)">
                        <path
                          d="M17.4597 5.35247L9.70154 13.439L1.94336 5.35247L3.32044 3.91712L9.70154 10.5683L16.0826 3.91712L17.4597 5.35247Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                  {activeCategory === 'Уровень сложности' ? (
                    <div className='show'>
                      <h4
                        onClick={() => {
                          itemAgeClick("Легкий");
                        }}
                      >
                        Легкий
                      </h4>
                      <h4
                        onClick={() => {
                          itemAgeClick("Средний");
                        }}
                      >
                        Средний
                      </h4>
                      <h4
                        onClick={() => {
                          itemAgeClick("Сложно");
                        }}
                      >
                        Сложно
                      </h4>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
          </div>
          <Link
            href={"/attractions#tours"}
            className='search__mobile'
            onClick={submitButton}
          >
            <SearchMobile />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FindTour;


{/* <Modal active={modalActive} setActive={setModalActive}>
        <div className="modal__choice">
          <div className="modal__choice--text">
            <h1>Выберите тур</h1>
              <div>
                x
              </div>
            </div>
            <ul className="modal__choice--lists">
              <li>Смешанный</li>
              <li>Разный</li>
              <li>Авто</li>
            </ul>
        </div>
      </Modal> */}