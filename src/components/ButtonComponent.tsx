import React from 'react';

type ButtonPropsType = {
    title: string
    callback: ()=> void
    disabled: boolean
}

const ButtonComponent = (props: ButtonPropsType) => {
    return (
        <div>
            <button onClick={props.callback} disabled={props.disabled}>{props.title}</button>
        </div>
    );
};

export default ButtonComponent;