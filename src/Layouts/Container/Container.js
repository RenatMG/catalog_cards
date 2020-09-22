import React from 'react';
import './Container.scss'

const Container = ({children}) => {
    return (
        <div className='page__container'>
                {children}
        </div>
    );
};

export default Container;