"use client";
import useSession, { IUserProfile } from "@/shared/hooks/useSession";
import Layout from "@/widgets/Layout/Layout";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState<IUserProfile | null>();
  const { user, isAuthorized, clearSession } = useSession();
  
  useEffect(() => {
    setProfile(user);
  }, [user,isAuthorized]);

  return (
    <Layout>
      <div className="container">
        {isAuthorized ? <> <h2>Профиль пользователя</h2>
        {profile != null ? (
          <>
          <img src={profile.avatar} alt="User Avatar" />
            <p>
              <strong>Имя:</strong> {profile.first_name || "Нет информации"}
            </p>
            <p>
              <strong>Фамилия:</strong> {profile.last_name || "Нет информации"}
            </p>
            <p>
              <strong>Email:</strong> {profile.email || "Нет информации"}
            </p>
            <p>
              <strong>Телефон:</strong>{" "}
              {profile.phone_number || "Нет информации"}
            </p>
            <button onClick={() => {
              clearSession()
              redirect('/')
            }}>Выйти</button>
          </>
        ) : (
          "loading..."
        )}</> : 'у тебя нет профиля, ты не зареган сушка'}
      </div>
    </Layout>
  );
};

export default Profile;
