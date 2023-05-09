import React, {useState} from "react";
import Counter from "../Counter/Counter";
import Settings from "../Settings/Settings";
import s from "./App.module.css"

const App = () => {
    const [maxValue, setMaxValue] = useState<number>(10);
    const [startValue, setStartValue] = useState<number>(0);
    const [disableSetButton, setDisableSetButton] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
  //test
    const handleMaxValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Number(event.target.value);
        if (value >= startValue && value <= 100) {
            setMaxValue(value);
            setDisableSetButton(false);
            setErrorMessage("");
        } else {
            setDisableSetButton(true);
            setErrorMessage(
                "Max value should be greater than start value and less than or equal to 100"
            );
        }
    };
    const handleStartValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const value = Number(event.target.value);
        if (value >= 0 && value <= maxValue - 1) {
            setStartValue(value);
            setDisableSetButton(false);
            setErrorMessage("");
        } else {
            setDisableSetButton(true);
            setErrorMessage(
                "Start value should be greater than or equal to 0 and less than max value"
            );
        }
    };

    const handleSetClick = (): void => {
        setDisableSetButton(true);
    };

    return (
        <div className={s.window}>
            <Counter maxValue={maxValue}
                     startValue={startValue}
            />
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                onMaxValueChange={handleMaxValueChange}
                onStartValueChange={handleStartValueChange}
                disableSetButton={disableSetButton}
                errorMessage={errorMessage}
                onSetClick={handleSetClick}
            />
        </div>
    );
};

export default App;

