import React from "react";
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
    const handleSetClick = () => {
        const maxEvent: React.ChangeEvent<HTMLInputElement> = {
            target: { value: props.maxValue.toString() }
        } as unknown as React.ChangeEvent<HTMLInputElement>

        const startEvent: React.ChangeEvent<HTMLInputElement> = {
            target: { value: props.startValue.toString() }
        } as unknown as React.ChangeEvent<HTMLInputElement>

        props.onMaxValueChange(maxEvent)
        props.onStartValueChange(startEvent)
    };

    return (
        <div className={s.window}>
            <Input
                title={"Max Value:"}
                value={props.maxValue}
                onChange={props.onMaxValueChange}
            />
            <Input
                title={"Start Value:"}
                value={props.startValue}
                onChange={props.onStartValueChange}
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
