import React from "react";
import {Button} from "./Button";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import { setMaxAC } from "../redux/reducers/counter-reducer";

export type SettingsProps = {
    // maxValue: number;
    // startValue: number;
    // onMaxValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStartValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSetClick: () => void
    errorMessage: boolean
    checkError: (maxValue: number, startValue: number) => void
};

const Settings = (props: SettingsProps) => {
    //useSelector
   const maxValue = useSelector<AppRootStateType,number>((state) => state.counter.max)
   const startValue = useSelector<AppRootStateType,number>((state) => state.counter.min)
    const dispatch = useDispatch()

    const onMaxValueChange = ( // меняет максимальное значение
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = Number(event.target.value);
        // setMaxValue(value);
         dispatch(setMaxAC(value))
        props.checkError(value, startValue)
    };
    return (
            <div className={"flex flex-col justify-between items-center p-10 w-96 border-indigo-300 border rounded-2xl gap-2.5"}>
                <Input
                    title={"Max Value:"}
                    value={maxValue}
                    onChange={onMaxValueChange}
                    startValue={startValue}
                    maxValue={maxValue}
                />
                <Input

                    title={"Start Value:"}
                    value={startValue}
                    onChange={props.onStartValueChange}
                    startValue={startValue}
                    maxValue={maxValue}
                />
                <Button
                    disabled={props.errorMessage}
                   // title={"Set"}
                    onClick={props.handleSetClick}
                >Set</Button>
            </div>
    );
};

export default Settings;
