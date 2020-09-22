import React from 'react';
import classes from './Button.module.scss';

const Button = ({title, onClick}) => {
    return (
        <div className={classes.button} onClick={onClick}>
            {title}
        </div>
    );
};

export default Button;