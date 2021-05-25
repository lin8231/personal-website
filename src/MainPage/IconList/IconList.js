import React from "react";
import classes from "./IconList.module.css";

import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import resumeIcon from "../../assets/resume.svg";
import emailIcon from "../../assets/email.svg";
import cv from "../../assets/mercury-lin-cv.pdf";

const IconList = (props) => {
  return (
    <div className={classes.Container}>
      {/* <GithubIcon className={classes.Icon} />
            <LinkedinIcon className={classes.Icon} />
            <ResumeIcon className={classes.Icon} />
            <EmailIcon className={classes.Icon} /> */}
      {/* <img src={githubIcon} alt="" className={classes.Icon} />
            <img src={linkedinIcon} alt="" className={classes.Icon}/>
            <img src={resumeIcon} alt="" className={classes.Icon}/>
            <img src={emailIcon} alt="" className={classes.Icon}/> */}

      <a
        href="https://github.com/lin8231"
        className={classes.IconContainer}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubIcon} alt="" className={classes.Icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/mercury-lin/"
        className={classes.IconContainer}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="" className={classes.Icon} />
      </a>
      <a
        href={cv}
        download
        className={classes.IconContainer}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={resumeIcon} alt="" className={classes.Icon} />
      </a>
      <a
        href="mailto:lin8231@outlook.com"
        className={classes.IconContainer}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={emailIcon} alt="" className={classes.Icon} />
      </a>
    </div>
  );
};

export default IconList;
