import React from 'react';
import classes from './NameDisplay.module.css';

const NameDisplay = props =>{
    return(
        <div className={classes.Container}>
            <p className={classes.Name}>Mercury Lin</p>
        </div>
    )
}

export default NameDisplay;