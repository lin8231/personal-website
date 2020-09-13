import React from 'react';
import classes from './IconList.module.css';

import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin.svg';
import { ReactComponent as ResumeIcon } from '../../assets/resume.svg';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';

import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import resumeIcon from '../../assets/resume.svg';
import emailIcon from '../../assets/email.svg';

const IconList = props => {

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

            <a href="https://www.google.co.nz"
                className={classes.IconContainer}
                target="_blank">
                <img src={githubIcon} alt="" className={classes.Icon} />
            </a>
            <a href="https://www.google.co.nz"
                className={classes.IconContainer}
                target="_blank">
                <img src={linkedinIcon} alt="" className={classes.Icon} />
            </a>
            <a href="https://www.google.co.nz"
                className={classes.IconContainer}
                target="_blank">
                <img src={resumeIcon} alt="" className={classes.Icon} />
            </a>
            <a href="https://www.google.co.nz"
                className={classes.IconContainer}
                target="_blank">
                <img src={emailIcon} alt="" className={classes.Icon} />
            </a>

        </div>
    )
}

export default IconList;
