import React from 'react';

type Props = {
    count: number;
    errorMessage?: boolean;
    maxValue: number;
    startValue: number;
};

const CounterDisplay = ({ count, maxValue, startValue }: Props) => {
    function checkValue() {
        if (count <= startValue || count > maxValue || startValue < 0) {
            return 'incorrect value';
        } else if (isNaN(startValue) || isNaN(maxValue)) {
            return 'enter value';
        } else {
            return "press 'set'";
        }
    }

    const box = 'flex justify-center items-center m-px  rounded-2xl  bg-white bg-opacity-20 w-full h-1/2  ';
    return (
        <div className={`${box}`}>
            <p>{checkValue()}</p>
        </div>
    );
};

export default CounterDisplay;
