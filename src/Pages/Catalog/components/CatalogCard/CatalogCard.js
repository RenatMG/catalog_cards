import React, {useEffect, useState} from 'react';
import './CatalogCard.scss';
import Address from "../../../../components/Address/Address";
import img from '../../../../img/flat.jpg'
import Attribute from "../../../../components/Attribute/Attribute";
import Agent from "../../../../components/Agent/Agent";
import Favorite from "../../../../components/Favorite/Favorite";
import {useCatalog} from "../../context/catalogContext";
import Button from "../../../../components/Button/Button";

const CatalogCard = ({card}) => {
    const {id, attributes: {rooms, address, title, area, unit}, relationships} = card;
    const [active, setActive] = useState(false);
    const {favorites, addToFavorites, removeFromFavorites} = useCatalog();
    useEffect(() => {
        if (!!favorites) {
            let active = favorites.indexOf(id) !== -1;
            setActive(active)
        }

    }, [favorites, id]);

    const favoriteHandler = () => {
        if (active) {
            removeFromFavorites(id)
        } else {
            addToFavorites(id)
        }
    };

    return (
        <div className='col-12 col-sm-6 col-md-4 my-3'>
            <div className="catalog-card">
                <div className="catalog-card__header">
                    <Attribute rooms={rooms} title={"комн."} variant={'dark'}/>
                    <Attribute rooms={area} title={unit}/>
                </div>
                <a href="/">
                    <img src={img} alt={title} className='catalog-card__picture'/>
                    <div className='catalog-card__title'>
                        {title}
                    </div>
                </a>
                <hr/>
                <Address address={address}/>
                <hr/>
                <Agent agent={relationships.attributes}/>
                <hr/>
                <div className='catalog-card__footer'>
                    <Favorite active={active} onClick={favoriteHandler}/>
                    <Button title={"Подробнее"}/>
                </div>


            </div>

        </div>
    );
};

export default CatalogCard;