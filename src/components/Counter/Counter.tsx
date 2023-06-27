import React, {useEffect, useState} from "react";
import {Button} from "../Button/Button";
import s from "./Counter.module.css"

type CounterProps = {
    maxValue: number;
    startValue: number;
    setMaxValue: (value: number) => void;
}

const Counter = ({ maxValue, startValue, setMaxValue }: CounterProps) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount(startValue);
    }, [startValue]);

    useEffect(() => {
        setMaxValue(maxValue);
    }, [maxValue]);


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