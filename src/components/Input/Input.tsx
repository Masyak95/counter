import React, {ChangeEvent} from "react";


type InputProps = {
    title: string;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: string;
    checkValue: (
        newValue: number,
        oldMaxValue: number,
        oldMinValue: number
    ) => string;
    setError: (error: string) => void;
};

export const Input = (props: InputProps) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number.parseInt(e.currentTarget.value);
        const error = props.checkValue(
            newValue,
            props.value,
            props.value === 0 ? 10 : props.value - 1
        );
        props.onChange(e);
        if (error) props.setError(error);
    };


    return (
        <div>
            <div>{props.title}</div>
            <input
                type={"number"}
                value={props.value}
                onChange={onChangeHandler}
            />
        </div>
    )
}