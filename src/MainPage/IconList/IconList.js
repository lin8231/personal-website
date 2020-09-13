import React from 'react';
import classes from './IconList.module.css';

import githubIcon from '../../assets/github.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import resumeIcon from '../../assets/file.svg';
import emailIcon from '../../assets/mail2.svg';

const IconList = props =>{

    return (
        <div className={classes.Container}>
            <img src={githubIcon} alt="" className={classes.Icon}/>
            <img src={linkedinIcon} alt="" className={classes.Icon}/>
            <img src={resumeIcon} alt="" className={classes.Icon}/>
            <img src={emailIcon} alt="" className={classes.Icon}/>
        </div>
    )
}

export default IconList;
