import React from 'react';
import classes from './Agent.module.scss';

const Agent = ({agent: {last_name, first_name, middle_name}}) => {
    return (
        <div className={classes.Agent}>
            <span>Агент по недвижимости:</span>
            <span>{last_name} {first_name} {middle_name}</span>
        </div>
    );
};

export default Agent;

