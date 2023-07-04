import React, {useState} from "react";
import Counter from "./Counter";
import Settings from "./Settings";


const App = () => {
    const [maxValue, setMaxValue] = useState<number>(10);
    const [startValue, setStartValue] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    const handleMaxValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number(event.target.value);
        setMaxValue(value);
    };

    const handleStartValueChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number(event.target.value);
        setStartValue(value);
    };

    const handleSetClick = () => {
        if (!errorMessage) {
            setCount(startValue)
        }
    }


    return (
        <div >
            <div >
                <div >
                    <Counter maxValue={maxValue}
                             startValue={startValue}
                             setMaxValue={setMaxValue}
                             count={count}
                             setCount={setCount}
                             errorMessage={errorMessage}
                    />

                </div>
                <div >
                    <Settings
                        maxValue={maxValue}
                        startValue={startValue}
                        onMaxValueChange={handleMaxValueChange}
                        onStartValueChange={handleStartValueChange}
                        handleSetClick={handleSetClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;

