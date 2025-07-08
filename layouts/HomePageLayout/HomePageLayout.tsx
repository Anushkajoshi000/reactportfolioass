// "use client";

// import React, { useRef } from "react";
// import type { NextPage } from "next";
// import classNames from "classnames/bind";
// import { Toaster } from "react-hot-toast";
// import Image from "next/image";
// import { CircularLoader, Navbar } from "../../components";
// import {
//   AboutSection,
//   ContactSection,
//   FooterSection,
//   JobsSection,
//   ProjectsSection,
//   SkillsSection,
// } from "../../containers";
// import { SECTION } from "../../utils/constants/constants";
// import { IHomePageLayoutProps } from "../../utils/typings/typings";
// import { useScroll, useTheme } from "../../utils/hooks";
// import styles from "./HomePageLayout.module.scss";

// const cx = classNames.bind(styles);

// const HomePageLayout: NextPage<IHomePageLayoutProps> = ({
//   cmsApiResponse,
//   cmsApiError,
//   CmsApiLoading,
// }) => {
//   const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
//   const { isScrollButtonVisible } = useScroll();
//   const { theme, switchTheme } = useTheme();

//   //const { jobs, skills, projects } = cmsApiResponse;
//   const { jobs = [], skills = [], projects = [] } = cmsApiResponse || {};

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleNavItemClick = (item: string) => {
//     window.scrollTo({
//       top: SECTION.ABOUT === item ? 0 : sectionsRef.current[item.toLowerCase()]!.offsetTop - 70,
//       behavior: "smooth",
//     });
//   };

//   if (cmsApiError)
//     return (
//       <div data-theme={theme} className={cx("error-container")}>
//         OOPS...Our servers are a little overwhelmed. Give it a moment and try again.
//       </div>
//     );

//   if (CmsApiLoading)
//     return (
//       <div data-theme={theme} className={cx("loader-container")}>
//         <CircularLoader />
//       </div>
//     );

//   return (
//     <div data-theme={theme} className={cx("home-page-layout")}>
//       <header className={cx("header")}>
//         <Navbar theme={theme} onNavItemClick={handleNavItemClick} switchTheme={switchTheme} />
//       </header>
//       <main>
//         <section
//           className={cx("about-section")}
//           ref={el => {
//             sectionsRef.current.about = el;
//           }}
//         >
//           <AboutSection />
//         </section>
//         <section
//           className={cx("job-section")}
//           ref={el => {
//             sectionsRef.current.jobs = el;
//           }}
//         >
//           <JobsSection jobs={jobs} />
//         </section>
//         <section
//           className={cx("projects-section")}
//           ref={el => {
//             sectionsRef.current.projects = el;
//           }}
//         >
//           <ProjectsSection projects={projects} />
//         </section>
//         <section
//           className={cx("skills-section")}
//           ref={el => {
//             sectionsRef.current.skills = el;
//           }}
//         >
//           <SkillsSection skills={skills} />
//         </section>
//         <section
//           className={cx("contact-section")}
//           ref={el => {
//             sectionsRef.current.contact = el;
//           }}
//         >
//           <ContactSection />
//         </section>
//       </main>
//       <FooterSection />
//       {isScrollButtonVisible && (
//         <Image
//           src="/assets/scrollup.webp"
//           alt="scroll-up-button"
//           className={cx("scroll-up")}
//           width={40}
//           height={40}
//           priority
//           onClick={scrollToTop}
//         />
//       )}
//       <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
//     </div>
//   );
// };

// export default HomePageLayout;
"use client";
import { IHomePageLayoutProps } from "../../utils/typings/typings";
import { IJobs, IProjects, ISkills } from "../../utils/typings/typings";

import React, { useRef } from "react";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import { Toaster } from "react-hot-toast";
import Image from "next/image";
import { CircularLoader, Navbar } from "../../components";
import {
  AboutSection,
  ContactSection,
  FooterSection,
  JobsSection,
  ProjectsSection,
  SkillsSection,
} from "../../containers";
import { SECTION } from "../../utils/constants/constants";
//import { IHomePageLayoutProps } from "../../utils/typings/typings";
import { useScroll, useTheme } from "../../utils/hooks";
import styles from "./HomePageLayout.module.scss";

const cx = classNames.bind(styles);

const HomePageLayout: NextPage<IHomePageLayoutProps> = ({
  cmsApiResponse,
  cmsApiError,
  CmsApiLoading,
}) => {
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});
  const { isScrollButtonVisible } = useScroll();
  const { theme, switchTheme } = useTheme();

  const jobs = (cmsApiResponse?.jobs ?? []) as IJobs[];
  const skills = (cmsApiResponse?.skills ?? []) as ISkills[];
  const projects = (cmsApiResponse?.projects ?? []) as IProjects[];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavItemClick = (item: string) => {
    const ref = sectionsRef.current[item.toLowerCase()];
    if (ref) {
      window.scrollTo({
        top: item === SECTION.ABOUT ? 0 : ref.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  if (cmsApiError) {
    return (
      <div data-theme={theme} className={cx("error-container")}>
        OOPS... Our servers are a little overwhelmed. Give it a moment and try again.
      </div>
    );
  }

  if (CmsApiLoading) {
    return (
      <div data-theme={theme} className={cx("loader-container")}>
        <CircularLoader />
      </div>
    );
  }

  if (jobs.length === 0 && skills.length === 0 && projects.length === 0) {
    return (
      <div data-theme={theme} className={cx("error-container")}>
        No data available at the moment. Please check back later.
      </div>
    );
  }

  return (
    <div data-theme={theme} className={cx("home-page-layout")}>
      <header className={cx("header")}>
        <Navbar theme={theme} onNavItemClick={handleNavItemClick} switchTheme={switchTheme} />
      </header>
      <main>
        <section
          className={cx("about-section")}
          ref={(el) => { sectionsRef.current.about = el; }}
        >
          <AboutSection />
        </section>
        <section
          className={cx("job-section")}
          ref={(el) => { sectionsRef.current.jobs = el; }}
        >
          <JobsSection jobs={cmsApiResponse?.jobs || []} />
        </section>
        <section
          className={cx("projects-section")}
          ref={(el) => { sectionsRef.current.projects = el; }}
        >
          <ProjectsSection projects={projects} />
        </section>
        <section
          className={cx("skills-section")}
          ref={(el) => { sectionsRef.current.skills = el; }}
        >
          <SkillsSection skills={skills} />
        </section>
        <section
          className={cx("contact-section")}
          ref={(el) => { sectionsRef.current.contact = el; }}
        >
          <ContactSection />
        </section>
      </main>
      <FooterSection />
      {isScrollButtonVisible && (
        <Image
          src="/assets/scrollup.webp"
          alt="scroll-up-button"
          className={cx("scroll-up")}
          width={40}
          height={40}
          priority
          onClick={scrollToTop}
        />
      )}
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
    </div>
  );
};

export default HomePageLayout;
