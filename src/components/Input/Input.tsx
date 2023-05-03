import React, {ChangeEvent} from "react";


type InputProps = {
    title: string
    value: number
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {




    return (
        <div>
            <div>{props.title}</div>
            <input
                type={"number"}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}