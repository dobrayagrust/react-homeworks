import React from 'react'
import s from './Header.module.css'
export const Header = () => {
    return (
        // <div>
        //     // add NavLinks
        //
        // </div>

    <div className={s.dropdown}>
        <div className={s.dropbtn}>react homeworks:</div>
        <div className={s.dropdownContent}>
                <a href="#/pre-junior">PRE-JUNIOR</a>
                <a href="#/junior">JUNIOR</a>
                <a href="#/junior-plus">JUNIOR-PLUS</a>
            </div>
        </div>
    )
}

