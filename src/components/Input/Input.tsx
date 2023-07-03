import React from "react";
import s from "./Input.module.css"

type InputProps = {
    title: string;
    value?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    startValue: number
    maxValue: number

};

export const Input = (props: InputProps) => {

    return (
        <div className={s.container}>
            <div>{props.title}</div>
            <input
                type={"number"}
                value={props.value}
                onChange={props.onChange}
                className={props.startValue >= props.maxValue || props.maxValue < 0 ? s.error : ""}
            />
        </div>
    )
}