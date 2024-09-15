import React from "react";

import { Button } from "../../component/button/Button";
import { Input } from "../../component/input/Input";
import { PostCard } from "../../widgets/postCard/PostCard";
import { PostInf } from "../../widgets/postInf/PostInf";
import { Nav } from "../../component/nav/Nav";

import "./main.scss";
import { Typography } from "@/component/typography/Typography";

export default function Main() {
  return (
    <>
      <main className="main">
        <div className="container">
          <Typography tag="h1" variant="med_48_117">
            Resources and insights
          </Typography>
          <p className="main__sub-title">
            The latest industry news, interviews, technologies, and resources.
          </p>

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
      </main>

      {/* <Nav /> */}

      <section className="posts">
        <div className="container">
          <div className="posts__header">
            <img src="" alt="" className="posts__header-img" />

            <div className="posts__header-inf">
              <PostInf />
            </div>
          </div>

          <div className="posts__footer">
            <PostCard />

            <PostCard />

            <PostCard />
          </div>
          <div className="line"></div>
        </div>
      </section>

      <section className="cards">
        <div className="container">
          <div className="cards__container">
            <PostCard />

            <PostCard />

            <PostCard />

            <PostCard />

            <PostCard />

            <PostCard />
          </div>

          <div className="cards__footer">
            <p className="cards__footer-text">
              Showed 1 to 10 of 1448 (Pages: 12)
            </p>
            <div className="cards__footer-nav">
              <div className="cards__footer-item cards__footer-active">1</div>
              <div className="cards__footer-item">2</div>
              <div className="cards__footer-item">3</div>
            </div>
          </div>

          <div className="line"></div>
        </div>
      </section>
    </>
  );
}
