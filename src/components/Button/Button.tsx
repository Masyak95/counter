import React from "react";
import s from "./Button.module.css"

type ButtonPropsType = {
    title: string;
    onClick: () => void;
    disabled?: boolean;
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button className={s.button} onClick={props.onClick} disabled={props.disabled}>
            {props.title}
        </button>
    )
}