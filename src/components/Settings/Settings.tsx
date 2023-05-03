import React, {useState} from "react";
import { Button } from "../Button/Button";
import s from "./Settings.module.css"
import {Input} from "../Input/Input";

export type SettingsProps = {
    maxValue: number
    startValue: number
    onMaxValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onStartValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const Settings = (props: SettingsProps) => {
    const [error, setError] = useState<string>("");

    const checkValue = (newValue: number, oldMaxValue: number, oldMinValue: number) => {
        if (newValue <= oldMinValue || newValue > 10 || newValue < 0) {
            return "incorrect value";
        } else if (isNaN(newValue)) {
            return "enter value";
        } else if (oldMaxValue !== props.maxValue || oldMinValue !== props.startValue) {
            return "press 'set'";
        } else {
            return "";
        }
    };//функция, которая проверяет, соответствует ли переданное значение заданным условиям

    const handleSetClick = () => {
        props.onMaxValueChange({
            target: { value: props.maxValue.toString() },
        } as React.ChangeEvent<HTMLInputElement>);

        props.onStartValueChange({
            target: { value: props.startValue.toString() },
        } as React.ChangeEvent<HTMLInputElement>);
    };

    const onMaxValueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number.parseInt(event.currentTarget.value);
        const error = checkValue(newValue, props.startValue, props.startValue === 0 ? 10 : props.startValue - 1);
        props.onMaxValueChange(event);
        if (error) setError(error);
    };//функция, которая вызывается при изменении значения максимального значения в поле ввода

    const onStartValueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number.parseInt(event.currentTarget.value);
        const error = checkValue(newValue, props.maxValue, props.maxValue - 1);
        props.onStartValueChange(event);
        if (error) setError(error);
    };//функция, которая вызывается при изменении значения начального значения в поле ввода

    return (
        <div className={s.window}>
            <Input
                title={"Max Value:"}
                value={props.maxValue}
                onChange={onMaxValueChangeHandler}
                error={error}
                checkValue={checkValue}
                setError={setError}
            />
            <Input
                title={"Start Value:"}
                value={props.startValue}
                onChange={onStartValueChangeHandler}
                error={error}
                checkValue={checkValue}
                setError={setError}
            />
            <div className={s.window}>
                <Button
                    title={"Set"}
                    onClick={handleSetClick}
                />
            </div>
        </div>
    );
};

export default Settings;
