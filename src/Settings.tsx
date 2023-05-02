import React from "react";
import { Button } from "./Button";

type SettingsProps = {
    maxValue: number;
    startValue: number;
    onMaxValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStartValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
        <div>
            <div>Max Value:</div>
            <input
                type="number"
                value={props.maxValue}
                onChange={props.onMaxValueChange}
            />

            <div>Start Value:</div>
            <input
                type="number"
                value={props.startValue}
                onChange={props.onStartValueChange}
            />
            <Button title={"Set"} onClick={handleSetClick} />
        </div>
    );
};

export default Settings;
