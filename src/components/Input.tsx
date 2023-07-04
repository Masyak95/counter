import React from "react";


type InputProps = {
    title: string;
    value?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    startValue: number
    maxValue: number

};

export const Input = (props: InputProps) => {

    return (
        <div className={"flex md:w-1/3"}>
            <label className={"block text-gray-500 font-bold"}>
                {props.title}
            </label>
            <div className={"md:w-2/3"}>
                <input
                    className={"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 border text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"}
                    type={"number"}
                    value={props.value}
                    onChange={props.onChange}
                    // className={props.startValue >= props.maxValue || props.maxValue < 0 ? s.error : ""}
                />
            </div>
        </div>
    )
}