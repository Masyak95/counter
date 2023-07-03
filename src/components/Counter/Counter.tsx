import React from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"
import CounterDisplay from "./Display/counterDisplay";

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
        <div className={s.container}>
            <CounterDisplay
                count={count}
                errorMessage={errorMessage}
            />
            <div className={s.buttons}>
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