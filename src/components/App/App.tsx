import React, {useState} from "react";
import Counter from "../Counter/Counter";
import Settings from "../Settings/Settings";
import s from "./App.module.css"

const App = () => {
    const [maxValue, setMaxValue] = useState<number>(10);
    const [startValue, setStartValue] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const handleMaxValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number(event.target.value);
        if (value >= startValue && value <= 100) {
            setMaxValue(value);
            setErrorMessage("");
        } else {
            setErrorMessage(
                "Max value should be greater than start value and less than or equal to 100"
            );
        }
    };
    const handleStartValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number(event.target.value);
        if (value >= 0 && value <= maxValue - 1) {
            setStartValue(value);
            setErrorMessage("");
        } else {
            setErrorMessage(
                "Start value should be greater than or equal to 0 and less than max value"
            );
        }
    };


    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.box}>
                    <Counter maxValue={maxValue}
                             startValue={startValue}
                             setMaxValue={setMaxValue}
                    />

                </div>
                <div className={s.box}>
                    <Settings
                        maxValue={maxValue}
                        startValue={startValue}
                        onMaxValueChange={handleMaxValueChange}
                        onStartValueChange={handleStartValueChange}
                        errorMessage={errorMessage}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;

