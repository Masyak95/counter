import React from "react";
import {Button} from "./Button";
import CounterDisplay from "./counterDisplay";

type CounterProps = {
    maxValue: number;
    startValue: number;
    setMaxValue: (value: number) => void;
    setCount: (count: number)=>void
    count: number
    errorMessage: boolean
}

const Counter = ({ maxValue, startValue, setCount, count, errorMessage}: CounterProps) => {


    const handleIncrement = (): void => {
        if (count < maxValue) {
            setCount(count + 1);
        }
    };

    const handleDecrement = (): void => {
        if (count > startValue) {
            setCount(count - 1);
        }
    };

    const handleReset = (): void => {
        setCount(0);
    };

    return (
        <div className={'flex flex-col justify-between items-center p-10 h-full'}>
            <CounterDisplay
                count={count}
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