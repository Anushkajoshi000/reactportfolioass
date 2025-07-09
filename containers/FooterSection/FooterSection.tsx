import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import classNames from "classnames/bind";
import styles from "./FooterSection.module.scss";

const cx = classNames.bind(styles);

const FooterSection: NextPage = () => {
  return (
    <footer className={cx("footer")}>
      <div className={cx("footer_copyright")}>
        
      </div>
      <div className={cx("footer-socialmedia")}>
        <p>Connect with me !</p>
        <div className={cx("footer-socialmedia-links")}>
          <Image
            src="/assets/github.webp"
            alt="Github Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://github.com/Anushkajoshi000", "_blank")}
          />
          <Image
            src="/assets/linkedin.webp"
            alt="Linkedin Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://www.linkedin.com/in/anushka-joshi-08a719219", "_blank")}
          />
          <Image
            src="/assets/instagram.webp"
            alt=" Instagram Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("https://www.instagram.com/anushka_joshi_0000/", "_blank")}
          />
          <Image
            src="/assets/gmail.webp"
            alt="Gmail Link"
            width={35}
            height={35}
            priority
            onClick={() => window.open("mailto:Anushkajoshi804@gmail.com.com", "_blank")}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
