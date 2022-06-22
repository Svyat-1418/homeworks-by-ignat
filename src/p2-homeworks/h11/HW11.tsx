import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import styles from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={styles.singleRange}>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
                <div>{value1}</div>
            </div>

            <div className={styles.doubleRangeWrap}>
                <SuperDoubleRange
                    value1={value1}
                    value2={value2}
                    onChangeValue1={setValue1}
                    onChangeValue2={setValue2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <div className={styles.doubleRangeValuesWrap}>
                    <span>{value1}</span>
                    <span>{value2}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
