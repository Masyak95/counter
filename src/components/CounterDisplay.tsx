import React from "react";
import ButtonComponent from "./ButtonComponent";
import {ErrorType} from "./Counter";

type CounterDisplayPropsType = {
    maxValue: number
    setError: (error: ErrorType)=>void
    error: ErrorType
    value: number
    setValue: (value: number) => void
    startValue: number
}

function CounterDisplay(props: CounterDisplayPropsType) {

    const incValue = () =>{
        props.setValue(props.value+1)
    }

    const resetHandler = () =>{
        props.setValue(props.startValue)
    }

    return (
        <div className={"CounterDisplay"}>

            <ButtonComponent
                title="inc"
                callback={incValue}
                disabled={false}
            />
            <ButtonComponent
                title="reset"
                callback={resetHandler}
                disabled={false}
            />
        </div>
    )
}

export default CounterDisplay;
