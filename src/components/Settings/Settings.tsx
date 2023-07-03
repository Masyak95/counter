import React from "react";
import {Button} from "../Button/Button";
import s from "./Settings.module.css";
import {Input} from "../Input/Input";

export type SettingsProps = {
    maxValue: number;
    startValue: number;
    onMaxValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStartValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSetClick: () => void

};

const Settings = (props: SettingsProps) => {


    return (
        <div className={s.container}>
            <Input
                title={"Max Value:"}
                value={props.maxValue}
                onChange={props.onMaxValueChange}
                startValue={props.startValue}
                maxValue={props.maxValue}
            />
            <Input
                title={"Start Value:"}
                value={props.startValue}
                onChange={props.onStartValueChange}
                startValue={props.startValue}
                maxValue={props.maxValue}
            />
            <Button
                title={"Set"}
                onClick={props.handleSetClick}
            />
        </div>
    );
};

export default Settings;
