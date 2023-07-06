import React from "react";

type ButtonPropsType = {
    title: string;
    onClick?: () => void;
    disabled?: boolean
}
export const Button = (props: ButtonPropsType) => {
    return (
        <button className={"bg-transparent hover:bg-indigo-500 text-indigo-900 font-thin hover:text-white " +
            "py-2 px-4 border border-indigo-500 hover:border-transparent rounded-2xl cursor-pointer"}
                onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}