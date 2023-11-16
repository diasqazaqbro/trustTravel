import React, { FC } from "react";
import styles from "./Title.module.sass";

interface TitleProps {
  text: string;
  color?: "primary";
}

const TitleCenter: FC<TitleProps> = ({ text, color }) => {
  return (
    <h1 className={color == "primary" ? styles.titleCenter : styles.titleSecondCenter}>
      {text}
    </h1>
  );
};

export default TitleCenter;
