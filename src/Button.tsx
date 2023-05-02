import React from "react";

type ButtonPropsType = {
    title: string
    onClick: ()=>void
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button>
            <span onClick={props.onClick}>{props.title}</span>
        </button>
    )
}