import React from "react";

import { Logo } from "@/assets/icons/Logo";
import { Button } from "@/component/button/Button";
import { Typography } from "@/component/typography/Typography";

import style from "./header.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className="flex-container">
          <a href="" className="logo">
            <Logo />
            <p className="logo__text">blog</p>
          </a>

          <div className={`${style.header__box}  flex-container`}>
            <div className={`${style.header__layout} flex-container`}>
              <Typography variant="med_14">Jobs</Typography>
              <Typography variant="med_14" color="opasity">
                Smart Match
              </Typography>

              <p className={style.header__layout_text}></p>
            </div>

            <div className={`${style.header__buttons} flex-container`}>
              <Button variant="secondary">Vacancy Feed</Button>
              <Button variant="primary">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
