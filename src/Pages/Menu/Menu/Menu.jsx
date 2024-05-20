import React from 'react';
import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg'
import Cover from '../../Home/Home/Shared/Cover';
import Offer from './Offer/Offer';
import Desert from './Desert/Desert';
import Pizza from './Pizza/Pizza';
import Salad from './salad/Salad';
import Soups from './Soups/Soups';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
          <Cover img={menuImg} title='OUR MENU' des='Would you like to try a dish?'></Cover>
            <Offer></Offer>
            <Desert></Desert>
            <Pizza></Pizza>
            <Salad></Salad>
            <Soups></Soups>
        </div>
    );
};

export default Menu;