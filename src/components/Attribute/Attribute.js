import React from 'react';
import classes from './Attribute.module.scss';

const Attribute = ({rooms, title, variant = 'light'}) => {

    const cls = [classes.Attribute];
    if(variant === 'dark'){
    cls.push(classes.AttributeDark);
    }


    return (
        <div className={cls.join(' ')}>
            <div>{rooms}</div>
            <div>{title}</div>
        </div>
    );
};

export default Attribute;