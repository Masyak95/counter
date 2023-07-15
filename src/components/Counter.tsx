import React, {FC} from "react";
import {Button} from "./Button";
import CounterDisplay from "./counterDisplay";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";

export type CounterProps = {
    // maxValue: number;
    // startValue: number;
    helperText: string | null
    // setMaxValue: (value: number) => void
    // count: number
    errorMessage: boolean
    handleIncrement: () => void
    handleDecrement: () => void
    handleReset: () => void

}

const Counter: FC <CounterProps> = (props) => {
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.max)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.min)
    const count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const dispatch = useDispatch()

    const { errorMessage, helperText, handleIncrement, handleDecrement, handleReset} = props

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

                    onClick={handleIncrement}
                    disabled={!count}
                >Increment</Button>
                <Button

                    onClick={handleDecrement}
                    disabled={!count}
                >Decrement</Button>
                <Button

                    onClick={handleReset}
                >Reset</Button>
            </div>
        </div>
    );
};
export default Counter;