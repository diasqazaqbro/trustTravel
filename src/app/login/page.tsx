"use client";

import React, { useState } from "react";
import "./Login.scss";
import Layout from "@/widgets/Layout/Layout";
import Link from "next/link";

const SignInUpForm = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  return (
    <Layout>
      <div className="login">
        <div
          className={`container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form action="#">
              <Link href={'/login/user'} className="item">
                <img src="/images/login/one.svg" />
                <h5>Я обычный пользователь</h5>
              </Link>
              <Link href={'/login/company'} className="item">
              <img src="/images/login/two.svg" />
                <h5>Я тур-компания</h5>
              </Link>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Войти</h1>
              <input type="email" placeholder="Почта" />
              <input type="password" placeholder="Пароль" />
              <a href="#">Забыли пароль?</a>
              <button>Войти</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div
                className={`overlay-panel overlay-left ${
                  isRightPanelActive ? "overlay-left-active" : ""
                }`}
              >
                <h1>Добро пожаловать!</h1>
                <p>
                  Чтобы оставаться на связи с нами, войдите в личный кабинет
                </p>
                <button className="ghost" onClick={handleSignInClick}>
                  Войти
                </button>
              </div>
              <div
                className={`overlay-panel overlay-right ${
                  isRightPanelActive ? "overlay-right-active" : ""
                }`}
              >
                <h1>Привет друг!</h1>
                <p>Если ты еще не с нами предлагаю Зарегистрироваться</p>
                <button className="ghost" onClick={handleSignUpClick}>
                  Регистрация
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignInUpForm;
