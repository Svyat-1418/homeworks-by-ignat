import React from 'react'
import SuperRange from "../c7-SuperRange/SuperRange";
import styles from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value1: number
    value2: number
    onChangeValue1?: (value: number) => void
    onChangeValue2?: (value: number) => void
    //value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        value1, value2,
        onChangeValue1, onChangeValue2
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <div className={styles.container}>
            <SuperRange value={value1} onChangeRange={onChangeValue1} />
            <SuperRange value={value2} onChangeRange={onChangeValue2} />
        </div>
    )
}

export default SuperDoubleRange
