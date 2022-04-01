import React from "react";
import s from "./Header.module.css"

export const Header = (props: { title: string }) => {
    return (
        <header className={s.header}>
            <h1>{props.title}</h1>
        </header>
    )
}