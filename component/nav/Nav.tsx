import React from "react";

import style from "./nav.module.scss";

export const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.nav__list}>
        <li className={style.nav__list_item}>
          All posts <span>31</span>
        </li>
        <li className={style.nav__list_item}>
          News <span>3</span>
        </li>
        <li className={style.nav__list_item}>
          Techniczne <span>76</span>
        </li>
        <li className={style.nav__list_item}>
          Kreatywność <span>33</span>
        </li>
        <li className={style.nav__list_item}>
          Rozwój <span>3</span>
        </li>
        <li className={style.nav__list_item}>
          Zarobki <span>12</span>
        </li>
        <li className={style.nav__list_item}>
          Podatki i Prawo <span>12</span>
        </li>
        <li className={style.nav__list_item}>
          Rozrywka <span>12</span>
        </li>
      </ul>
    </nav>
  );
};
