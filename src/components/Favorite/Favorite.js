import React from 'react';
import classes from './Favorite.module.scss'
import HeartEmpty from "../../svg/HeartEmpty/HeartEmpty";
import HeartFull from "../../svg/HeartFull/HeartFull";

const Favorite = ({active = false, onClick}) => {
    return (
        <div className={classes.favorite} onClick={onClick}>
            {
                active
                    ?
                    <HeartFull/>
                    :
                    <HeartEmpty/>
            }
        </div>
    );
};

export default Favorite;