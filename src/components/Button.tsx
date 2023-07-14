import React, {ButtonHTMLAttributes, FC} from "react";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
    onClick?: () => void;
    disabled?: boolean
}
export const Button: FC<ButtonPropsType> = (props ) => {
    const {children, onClick, ...oderProps } = props

    return (
        <button className={"bg-transparent hover:bg-indigo-500 text-indigo-900 font-thin hover:text-white " +
            "py-2 px-4 border border-indigo-500 hover:border-transparent rounded-2xl cursor-pointer"}
                onClick={onClick}
                {...oderProps}
        >
            {children}
        </button>
    )
}