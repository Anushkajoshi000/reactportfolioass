
import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import classNames from "classnames/bind";
import { Months } from "../../utils/constants/constants";
import { IJobCardProps } from "../../utils/typings/typings";
import styles from "./JobCard.module.scss";

const cx = classNames.bind(styles);

const JobCard: NextPage<IJobCardProps> = ({ job }) => {
  if (!job || !job.from) return null;

  const {
    company,
    designation,
    from,
    to,
    logo,
    companyLinkedin,
    companyUrl,
    description,
  } = job;

  const [fromYear, fromMonthIndex] = from.split("-");
  const fromMonth = Months[parseInt(fromMonthIndex)];

  const toDisplay = to
    ? (() => {
        const [toYear, toMonthIndex] = to.split("-");
        return `${Months[parseInt(toMonthIndex)]}, ${toYear}`;
      })()
    : "Present";

  return (
    <div className={cx("job-card")}>
      <h2>{company}</h2>
      <h3>{designation}</h3>

      {logo?.url && (
        <Image
          src={logo.url}
          alt={`${company} logo`}
          width={90}
          height={40}
          className={cx("job-card-company-logo")}
          priority
        />
      )}

      <p className={cx("job-card-timeline")}>{`${fromMonth}, ${fromYear}`}</p>

      <p className={cx("job-card-date")}>
        {`${fromMonth}, ${fromYear}`} - {toDisplay}
      </p>

      {description && <p className={cx("job-card-description")}>{description}</p>}

      <div className={cx("job-card-company-links")}>
        {companyLinkedin && (
          <a
            href={companyLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            title={`${company} LinkedIn`}
          >
            <Image
              src="/assets/linkedin.webp"
              alt="LinkedIn icon"
              width={30}
              height={30}
              priority
            />
          </a>
        )}
        {companyUrl && (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={`${company} Website`}
          >
            <Image
              src="/assets/www.webp"
              alt="Website icon"
              width={30}
              height={30}
              priority
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default JobCard;
