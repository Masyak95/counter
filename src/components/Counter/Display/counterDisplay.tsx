import React from 'react';

type Props = {
    count: number
    errorMessage?: boolean
}

const CounterDisplay = ({count}: Props) => {

    return (
        <div>
            <p>{count}</p>
        </div>
    );
};

export default CounterDisplay;