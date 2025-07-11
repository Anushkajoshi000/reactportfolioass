"use client";

import { useState } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import Image from "next/image";
import { SECTION, THEME } from "../../utils/constants/constants";
import { INavbarProps } from "../../utils/typings/typings";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

const Navbar: NextPage<INavbarProps> = ({
  onNavItemClick = () => {},
  switchTheme = () => {},
  theme,
}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <nav className={cx("navbar")}>
        <div className={cx("menu")}>
          {/* <input
            className={cx("checked")}
            type="checkbox"
            checked={showSidebar}
            onChange={() => setShowSidebar(!showSidebar)}
          /> */
          <input
  className={cx("checked")}
  type="checkbox"
  checked={showSidebar}
  onChange={() => setShowSidebar(!showSidebar)}
  aria-label="Toggle menu"
  title="Toggle menu"
/>
}
          <div className={cx("line", showSidebar ? "line-1" : "line1")} />
          <div className={cx("line", showSidebar ? "line-2" : "line2")} />
          <div className={cx("line", showSidebar ? "line-3" : "line3")} />
        </div>
        <p className={cx("navbar-name")}>
          <span>Anushka</span>
          <Image
            src={theme === THEME.LIGHT ? "/assets/sun.webp" : "/assets/moon.webp"}
            alt="sun-moon-image"
            width={45}
            height={45}
            priority
            onClick={switchTheme}
          />
        </p>
        <div className={cx("navbar-list")}>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.ABOUT)}>
            About
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.JOBS)}>
            Work
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.PROJECTS)}>
            Projects
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.SKILLS)}>
            Skills
          </p>
          <p className={cx("navbar-list-item")} onClick={() => onNavItemClick(SECTION.CONTACT)}>
            Contact
          </p>
        </div>
      </nav>
      <div className={cx("sidebar", showSidebar && "active")}>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.ABOUT)}>
          About
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.JOBS)}>
          Work
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.PROJECTS)}>
          Projects
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.SKILLS)}>
          Skills
        </p>
        <p className={cx("sidebar-item")} onClick={() => onNavItemClick(SECTION.CONTACT)}>
          Contact
        </p>
      </div>
    </>
  );
};

export default Navbar;
