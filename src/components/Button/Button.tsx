import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    title: string
    onClick: ()=>void
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button className={s.btn}>
            <span onClick={props.onClick}>{props.title}</span>
        </button>
    )
}