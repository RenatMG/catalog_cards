import React from 'react';
import CatalogCard from "./components/CatalogCard/CatalogCard";

const data = require('../../api/entities');

const Catalog = () => {

    return (
        <div className='container-lg'>
            <div className="row">
                {
                    !!data &&
                    <>
                        {
                            data.response.map(card => {
                                return (<CatalogCard key={card.id} card={card}/>)
                            })
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default Catalog;