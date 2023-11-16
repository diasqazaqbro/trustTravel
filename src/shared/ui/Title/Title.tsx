import React, { FC } from "react";
import styles from "./Title.module.sass";

interface TitleProps {
  text: string;
  color?: "primary";
}

const Title: FC<TitleProps> = ({ text, color }) => {
  return (
    <h1 className={color == "primary" ? styles.title : styles.titleSecond}>
      {text}
    </h1>
  );
};

export default Title;
