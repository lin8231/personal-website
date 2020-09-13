import React from 'react';
import IconList from './IconList/IconList';
import NameDisplay from './NameDisplay/NameDisplay';

import classes from './MainPage.module.css';

const MainPage = props => {
    return (
        <div className={classes.Container}>
            <div className={classes.Content}>
                <NameDisplay />
                <IconList />
            </div>
        </div>
    )
}

export default MainPage;