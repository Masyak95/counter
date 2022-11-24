import React, {useState} from "react";


function Counter() {

    let [count,setCount] = useState(0)
    const onClickPlus = () => {
        setCount(count + 1)
    };
     const onClickReset = () => {
         setCount(0)
     }


    return (
        <div className={"Counter"}>
            <h1>{count}</h1>
            <button className={"inc"} onClick={()=>{onClickPlus()}}>inc</button>
            <button className={"reset"} onClick={()=>{onClickReset()}}>reset</button>
        </div>
    )
}

export default Counter;