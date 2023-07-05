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
        <div className={"flex w-full justify-between items-center"}>
            <label className={"block text-gray-500 "}>
                {props.title}
            </label>
            <div >
                <input
                    className={"bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-4 border text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"}
                    type={"number"}
                    value={props.value}
                    onChange={props.onChange}
                    // className={props.startValue >= props.maxValue || props.maxValue < 0 ? s.error : ""}
                />
            </div>
        </div>
    )
}