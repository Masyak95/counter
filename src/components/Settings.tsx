import React from "react";
import {Button} from "./Button";
import {Input} from "./Input";
import {useSelector} from "react-redux";

export type SettingsProps = {
    maxValue: number;
    startValue: number;
    onMaxValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onStartValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSetClick: () => void
    errorMessage: boolean

};

const Settings = (props: SettingsProps) => {
    //useSelector
   // const max = useSelector<any,number>((state) => state.counter.max)
    return (
            <div className={"flex flex-col justify-between items-center p-10 w-96 border-indigo-300 border rounded-2xl gap-2.5"}>
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
                    disabled={props.errorMessage}
                    title={"Set"}
                    onClick={props.handleSetClick}
                />
            </div>
    );
};

export default Settings;
