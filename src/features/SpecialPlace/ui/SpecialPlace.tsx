import Title from "@/shared/ui/Title/Title";
import React from "react";
import style from "./SpecialPlace.module.sass";
import Image from "next/image";

const SpecialPlace = () => {
  return (
    <div className={style.special}>
      <Title text="Специальные предложения" />

      <div className={style.list}>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img
              src={"/images/mountain.png"}
              alt="mountain"
              width={'100%'}
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <img
              src={"/images/mountain.png"}
              alt="mountain"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <img
              src={"/images/mountain.png"}
              alt="mountain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPlace;
