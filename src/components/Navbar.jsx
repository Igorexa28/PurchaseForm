import React from 'react';
import '../styles/Navbar.css';
import IconBlock from './IconBlock';
import dashboard from '../icons/dashboard.svg';
import home from '../icons/home.svg';
import clipboard from '../icons/clipboard.svg';
import list from '../icons/document.svg';
import paper from '../icons/paper.svg';
import checked from '../icons/checked.svg';
import wallet from '../icons/wallet.svg';
import creditCard from '../icons/credit-card.svg';
import menu from '../icons/menu.svg';
import money from '../icons/money-graph-with-up-arrow.svg';
import truck from '../icons/delivery-truck.svg';
import switcher from '../icons/switches.svg';

const Navbar = () => {
    const iconsContainer = [
        { svg: dashboard, classToUse: "mainIconOfMenu" }, 
        { svg: home, classToUse: "iconOfMenu" },
        { svg: clipboard, classToUse: "iconOfMenu" },
        { svg: list, classToUse: "iconOfMenu" },
        { svg: list, classToUse: "iconOfMenu" },
        { svg: paper, classToUse: "iconOfMenu" },
        { svg: checked, classToUse: "iconOfMenu" },
        { svg: wallet, classToUse: "iconOfMenu" },
        { svg: creditCard, classToUse: "iconOfMenu" },
        { svg: menu, classToUse: "iconOfMenu" },
        { svg: money, classToUse: "iconOfMenu" },
        { svg: truck, classToUse: "iconOfMenu" },
        { svg: switcher, classToUse: "iconOfMenu" },
    ];

    const menuOptions = iconsContainer.map(( element, index ) => {
        return (
            <IconBlock key={ index } svg={ element.svg } classToUse={ element.classToUse } />
        );
    });

    return (
        <div className="navbar">
            { menuOptions }
        </div>
    );
};

export default Navbar;