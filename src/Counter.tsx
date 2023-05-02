import React, {useState} from "react";
import {Button} from "./Button";

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
        <div>
            <p>{count}</p>
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
    );
};
export default Counter;