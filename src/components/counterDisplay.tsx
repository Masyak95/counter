import React from 'react';

type Props = {
    count: number;
    errorMessage?: boolean;
    helperText: string | null
    maxValue: number;
    startValue: number;

}
const CounterDisplay = ({helperText, count, errorMessage}: Props) => {

    const checkValue = () => {
        if (helperText) {
            return helperText
        }
        return count
    }

    const box = 'flex justify-center items-center m-px  rounded-2xl  bg-white bg-opacity-20 w-full h-1/2  ';
    const disabled = 'opacity-25 pointer-events-none'

    return (
        <div className={`${box} ${errorMessage && disabled}`} aria-disabled={errorMessage}>
            <p>{checkValue()}</p>
        </div>
    );
};

export default CounterDisplay
