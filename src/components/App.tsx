import React, {useState} from "react";
import Counter from "./Counter";
import Settings from "./Settings";
import AnimatedCursor from "react-animated-cursor";


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

    const box = "flex justify-center m-px  rounded-2xl  bg-white bg-opacity-20 "


    return (
        <div className={"fixed left-0 top-0 flex h-full w-full items-center justify-center py-10  bg-gradient-to-r from-indigo-500 from-10% "}>
           <AnimatedCursor
               color='184, 91, 255'
           />
            <div className={`${box} backdrop-blur-ls`}>
                <div>
                    <Counter maxValue={maxValue}
                             startValue={startValue}
                             setMaxValue={setMaxValue}
                             count={count}
                             setCount={setCount}
                             errorMessage={errorMessage}
                    />
                </div>
                <div className={`${box}`}>
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

