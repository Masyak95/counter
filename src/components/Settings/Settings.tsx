import React from "react";
import { Button } from "../Button/Button";
import s from "./Settings.module.css"

type SettingsProps = {
    maxValue: number;
    startValue: number;
    onMaxValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStartValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // error: string
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
            <div>Max Value:</div>
            <input
                type="number"
                value={props.maxValue}
                onChange={props.onMaxValueChange}
                // error={props.maxValue <= props.startValue ||props.maxValue > 10 || isNaN(props.maxValue)}
            />

            <div>Start Value:</div>
            <input
                type="number"
                value={props.startValue}
                onChange={props.onStartValueChange}
                // error={props.maxValue <= props.startValue ||props.maxValue > 0 || isNaN(props.maxValue)}
            />
            <div className={s.window}>
                <Button
                    title={"Set"}
                    onClick={handleSetClick}
                    // disabled={props.error !== 'work' && props.error !== 'press \'set\''}
                />
            </div>
        </div>
    );
};

export default Settings;
