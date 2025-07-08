"use client";

import React from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./AboutSection.module.scss";

const cx = classNames.bind(styles);

const AboutSection: NextPage = () => {
  return (
    <div className={cx("about")}>
      <div className={cx("about-left")}>
        <h1 className={cx("about-left-head")}>Hi, I&apos;m Anushka Joshi</h1>
        <p className={cx("about-left-text")}>
          I’m an enthusiastic AI/ML developer with strong Python skills and a passion for solving problems using machine learning, computer
vision, and NLP. I enjoy building smart, scalable applications using tools like TensorFlow, Scikit-Learn, and Flask.
        </p>
        <div className={cx("about-left-socialMedia")}>
          <Image
            src="/assets/github.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() => window.open("https://github.com/Anushkajoshi000", "_blank")}
          />
          <Image
            src="/assets/linkedin.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() => window.open("https://www.linkedin.com/in/anushka-joshi-08a719219", "_blank")}
          />
          <Image
            src="/assets/instagram.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() => window.open("https://www.instagram.com/anushka_joshi_0000/", "_blank")}
          />
          <Image
            src="/assets/gmail.webp"
            alt="Example WebP"
            width={40}
            height={40}
            priority
            onClick={() => window.open("mailto:anushkajoshi804@gmail.com", "_blank")}
          />
        </div>
        <div
          className={cx("about-left-starme")}
          onClick={() => window.open("https://github.com/Anushkajoshi000", "_blank")}
        >
          ⭐ Star Me On Github
        </div>
      </div>
      <div className={cx("about-right")}>
        <div className={cx("about-right-profilePic")} />
      </div>
    </div>
  );
};

export default AboutSection;
