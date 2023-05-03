import React, {useState} from "react";
import Counter from "../Counter/Counter";
import Settings from "../Settings/Settings";
import s from "./App.module.css"

const App = () => {
    const [maxValue, setMaxValue] = useState<number>(10);
    const [startValue, setStartValue] = useState<number>(0);
    const handleMaxValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setMaxValue(Number(event.target.value));
    };

    const handleStartValueChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setStartValue(Number(event.target.value));
    };

    return (
        <div className={s.window}>
            <Counter
                maxValue={maxValue}
                startValue={startValue}
            />
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                onMaxValueChange={handleMaxValueChange}
                onStartValueChange={handleStartValueChange}
            />
        </div>
    );
};

export default App;
