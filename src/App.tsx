import React, {useState} from "react";
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import AnimatedCursor from "react-animated-cursor";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {setCountAC, setStartAC} from "./redux/reducers/counter-reducer";


const App = () => {
    // const [maxValue, setMaxValue] = useState<number>(10);
    // const [startValue, setStartValue] = useState<number>(0);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    const [helperText, setHelperText] = useState<string | null>(null)
    // const [count, setCount] = useState<number>(0);
   const maxValue = useSelector<AppRootStateType, number>(state => state.counter.max)
   const startValue = useSelector<AppRootStateType, number>(state => state.counter.min)
   const count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const dispatch = useDispatch()
    const checkError = (maxValue: number, startValue: number) => { //валидация
        if (maxValue <= startValue || maxValue > 10 || startValue < 0) {
            setHelperText('incorrect value')
            setErrorMessage(true)
        } else if (isNaN(startValue) || isNaN(maxValue)) {
            setHelperText('enter value')
            setErrorMessage(true)
        } else {
            setErrorMessage(false)
            setHelperText('enter value and press set')
        }
    }


    const handleStartValueChange = ( //меняет стартовое значение
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number(event.target.value)
        //setStartValue(value)
        dispatch(setStartAC(value))
        checkError(maxValue, value)
    };

    const handleSetClick = () => { //меняет состояние при нажатии кнопки сет
        if (!errorMessage) {
            dispatch(setCountAC(startValue))
            setHelperText(null)
        }
    }

    const handleIncrement = () => {
        if (count < maxValue) {
            dispatch(setCountAC(count + 1))
        }
    };

    const handleDecrement = () => {
        if (count > startValue) {
            dispatch(setCountAC(count - 1))
        }
    };

    const handleReset = () => {
        dispatch(setCountAC(0))
    };



    const box = "flex justify-center m-px  rounded-2xl  bg-white bg-opacity-20 "

    return (
        <div
            className={"fixed left-0 top-0 flex h-full w-full items-center justify-center py-10  bg-gradient-to-r from-indigo-500 from-10%"}>
            <AnimatedCursor
                color='184, 91, 255'
                outerSize={15}
                outerAlpha={0.2}
                innerScale={1}
            />
            <div className={`${box} backdrop-blur-ls`}>
                <div>
                    <Counter
                        // maxValue={maxValue}
                        //      startValue={startValue}
                             // setMaxValue={setMaxValue}
                             // count={count}
                             helperText={helperText}
                             errorMessage={errorMessage}
                             handleIncrement={handleIncrement}
                             handleDecrement={handleDecrement}
                             handleReset={handleReset}

                    />
                </div>
                <div className={`${box}`}>
                    <Settings
                        errorMessage={errorMessage}
                        // maxValue={maxValue}
                        // startValue={startValue}
                        // onMaxValueChange={handleMaxValueChange}
                        checkError={checkError}
                        onStartValueChange={handleStartValueChange}
                        handleSetClick={handleSetClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;

