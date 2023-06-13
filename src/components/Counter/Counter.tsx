import React, {useState} from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"

type CounterProps = {
    maxValue: number;
    startValue: number;

}

const Counter = ({ maxValue, startValue }: CounterProps) => {
    const [count, setCount] = useState<number>(startValue);

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
        setCount(startValue);
    };

    return (
        <div className={s.container}>
            <p>{count}</p>
            <div className={s.buttons}>
            <Button
                title={"Increment"}
                onClick={handleIncrement}
            />
            <Button
                title={"Decrement"}
                onClick={handleDecrement}
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