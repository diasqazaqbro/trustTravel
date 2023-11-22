"use client";
import useSession from "@/shared/hooks/useSession";
import Layout from "@/widgets/Layout/Layout";
import axios from "axios";
import React, { useState } from "react";

const Company: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setSession, getToken } = useSession();

  const handleRegistration = async () => {
    try {
      if (password !== confirmPassword) {
        console.error("Пароль и подтверждение пароля не совпадают");
        return;
      }

      const response = await axios.post(
        "https://timkaqwerty.pythonanywhere.com/auth/users/",
        {
          email,
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      if (response.status === 201) {
        const result = await axios.post(
          "https://timkaqwerty.pythonanywhere.com/auth/token/login/",
          {
            username,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(result);
        if (result.status === 200) {
          const { auth_token } = result.data;
          console.log(auth_token);
          setSession(auth_token);
          const create = await axios.post(
            "https://timkaqwerty.pythonanywhere.com/api/cprofile/",
            {
              username,
              password,
              auth_token,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${auth_token}`,
              },
            }
          );
          console.log(create);
        }
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };
  console.log(getToken());

  return (
    <Layout>
      <div className="login">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Регистрация</h1>
              <input
              placeholder="Имя пользователя (demon_and_android228)"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
              placeholder="Введите почту (example@mail.com)"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
              placeholder="Введите пароль"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
              placeholder="Повторите свой пароль"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            <button type="button" onClick={handleRegistration}>
              Зарегистрироваться
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-right`}>das</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Company;
