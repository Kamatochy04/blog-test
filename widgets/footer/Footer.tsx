import React from "react";

import { Button } from "@/component/button/Button";
import { Input } from "@/component/input/Input";

import "./footer.scss";
import { Logo } from "@/assets/icons/Logo";
import { Typography } from "@/component/typography/Typography";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top flex-container">
          <div>
            <Logo />

            <ul className="footer__list flex-container">
              <li className="footer__list-item">Job Board</li>
              <li className="footer__list-item">About Us</li>
              <li className="footer__list-item">Pricing</li>
              <li className="footer__list-item">Blog</li>
            </ul>
          </div>

          <div className="main__footer">
            <div className="main__footer-box">
              <Input placeholder="Email" variant="default" />
              <Button variant="primary">Subscribe</Button>
            </div>

            <p className="main__footer-text">
              We care about your data in our <span>privacy policy</span>
            </p>
          </div>
        </div>

        <div className="footer__bottom ">
          <div className="footer__bottom-text">
            T © 2077 Untitled UI. All rights reserved.
          </div>
          <ul className="footer__bottom-list">
            <Typography variant="link" color="opasity">
              Terms
            </Typography>
            <Typography variant="link" color="opasity">
              Cookies
            </Typography>
            <Typography variant="link" color="opasity">
              Privacy
            </Typography>
          </ul>
        </div>
      </div>
    </footer>
  );
};
