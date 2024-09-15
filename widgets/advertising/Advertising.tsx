import React from "react";
import Image from "next/image";

import { Logo } from "@/assets/icons/Logo";
import { Star } from "@/assets/icons/Star";
import { Button } from "@/component/button/Button";

import advertisingImg2 from "../../assets/img/image 12 (2).png";

import "./advertising.scss";

export const Advertising = () => {
  return (
    <section className="advertising">
      <div className="container">
        <div className="advertising__container">
          <div className="advertising__inf">
            <Logo />
            <div className="advertising__inf-box">
              <h2 className="advertising__title">
                Growth performance tracking made easy
              </h2>
              <p className="advertising__sub-title">
                Find your perfect job easy
              </p>
            </div>

            <Button variant="primary" className="advertising-button">
              Try Now
            </Button>
          </div>

          <div className="advertising__preview">
            <p className="advertising__preview-text">
              The platform is user-friendly and makes it easy to post job
              listings, screen resumes, and communicate with potential
              candidates. The candidate match feature is particularly useful in
              finding the right fit for open positions.
            </p>

            <div className="advertising__preview-inf">
              <div>
                <h3 className="advertising__preview-title">Chat GPT</h3>
                <div className="advertising__preview-subtitle">
                  AI chat, from OpenAI
                </div>
              </div>

              <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </div>
            <Image src={advertisingImg2} alt="" className="advertising__img" />
          </div>
        </div>
      </div>
    </section>
  );
};
