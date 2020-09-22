import React from 'react';
import classes from './Address.module.scss';

const Address = ({address}) => {
    const {city, street, house, room} = address
    return (
        <div className={classes.Address}>
            <span>город: {city}, {street}</span>
            <span>дом: {house}, кв.{room}</span>
        </div>
    );
};

export default Address;