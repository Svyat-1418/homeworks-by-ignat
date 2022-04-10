import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages"
import s from "./Header.module.css"


function Header() {
    return (
        <header>
            {/*// add NavLinks*/}

            <div className={s.wrapper}>
                <input type="checkbox" id={"checkMenu"} className={s.checkMenu}/>
                <label htmlFor={"checkMenu"} className={s.checkMenuLabel}>react homeworks</label>
                <div className={`${s.burgerLine} ${s.first}`}> </div>
                <div className={`${s.burgerLine} ${s.second}`}> </div>
                <div className={`${s.burgerLine} ${s.third}`}> </div>
                <div className={`${s.burgerLine} ${s.forth}`}> </div>
                <nav className={s.mainMenu}>
                    <NavLink to={PATH.PRE_JUNIOR}
                             style={({isActive}) => ({color: isActive? "gold" : "whitesmoke"})}>
                        Pre Junior
                    </NavLink>
                    <NavLink to={PATH.JUNIOR}
                             style={({isActive}) => ({color: isActive ? "gold" : "whitesmoke"})}>
                        Junior
                    </NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS}
                             style={({isActive}) => ({color: isActive ? "gold" : "whitesmoke"})}>
                        Junior Plus
                    </NavLink>
                </nav>
            </div>

            {/*<div>
                <NavLink to={PATH.PRE_JUNIOR}>Pre Junior</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            </div>
            <div>
                <NavLink to={PATH.JUNIOR_PLUS}>Junior Plus</NavLink>
            </div>*/}
        </header>
    )
}

export default Header
