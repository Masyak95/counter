import React from "react";
import {Button} from "../Button/Button";
import s from "./Settings.module.css";
import {Input} from "../Input/Input";

export type SettingsProps = {
    maxValue: number;
    startValue: number;
    onMaxValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStartValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disableSetButton: boolean;
    errorMessage: string;
    onSetClick: () => void;
};

const Settings = (props: SettingsProps) => {

    return (
        <div className={s.container}>
            {props.errorMessage && <p className={s.error}>{props.errorMessage}</p>}
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
            <Button
                title={"Set"}
                onClick={props.onSetClick}
                disabled={props.disableSetButton}
            />
        </div>
    );
};

export default Settings;
