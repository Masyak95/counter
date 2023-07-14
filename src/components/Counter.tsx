import React, {FC} from "react";
import {Button} from "./Button";
import CounterDisplay from "./counterDisplay";

export type CounterProps = {
    maxValue: number;
    startValue: number;
    helperText: string | null
    setMaxValue: (value: number) => void
    count: number
    errorMessage: boolean
    handleIncrement: () => void
    handleDecrement: () => void
    handleReset: () => void

}

const Counter: FC <CounterProps> = (props) => {

    const {maxValue, startValue, count, errorMessage, helperText, handleIncrement, handleDecrement, handleReset} = props

    return (
        <div className={'flex flex-col justify-between items-center p-10 h-full'}>
            <CounterDisplay
                count={count}
                helperText={helperText}
                errorMessage={errorMessage}
                maxValue={maxValue}
                startValue={startValue}

            />
            <div className={"flex gap-2"}>
                <Button
                    title={"Increment"}
                    onClick={handleIncrement}
                    disabled={!count}
                />
                <Button
                    title={"Decrement"}
                    onClick={handleDecrement}
                    disabled={!count}
                />
                <Button
                    title={"Reset"}
                    onClick={handleReset}
                />
            </div>
        </div>
    );
};
export default Counter;