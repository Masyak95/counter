import React from "react";


type InputProps = {
    title: string;
    value?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    startValue: number
    maxValue: number

};

export const Input = (props: InputProps) => {

    const errorClasses = props.startValue >= props.maxValue || props.maxValue < 0 ? 'border-red-500 text-red-500' : '';


    return (
        <div className={"flex w-full justify-between items-center"}>
            <label className={"block text-gray-500 "}>
                {props.title}
            </label>
            <div >
                <input
                    className={`bg-gray-200 appearance-none border rounded w-full py-2 px-4 border-gray-200 text-gray-700 leading-tight focus:outline-none focus:bg-white
                     ${errorClasses}`}
                    type="number"
                    value={props.value}
                    onChange={props.onChange}
                />

            </div>
        </div>
    )
}