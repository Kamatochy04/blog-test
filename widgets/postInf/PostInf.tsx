import React from "react";

import "./postInf.scss";

export const PostInf = () => {
  return (
    <div className="post-inf">
      <div className="flex-container">
        <div className="post-inf__header-name ">
          <img src="" alt="" />
          <p>Polina Babich</p>
        </div>

        <div className="post-inf__header-categorie">Techniczne</div>
      </div>

      <h3 className="post-inf__title">
        Kim jest Administrator IT? Obowiązki, wyzwania, zarobki
      </h3>
      <p className="post-inf__descr">
        Umiejętność efektywnego korzystania z programów do edycji tekstu jest
        niezwykle ważna w życiu zawodowym, jak również osobistym. Jeśli
        zastanawiasz się, jak zrobić profesjonalny spis treści w Wordzie, ten
        artykuł jest dla Ciebie.
      </p>

      <div className="post-inf__footer flex-container">
        <div className="post-inf__views">Nov 26, 2023</div>
        <div className="post-inf__time">5 min read</div>
      </div>
    </div>
  );
};
