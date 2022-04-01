import React from 'react'
import styles from "./Affairs.module.css"
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    } // need to fix
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                {mappedAffairs}
                <div className={styles.btnWrap}>
                    <SuperButton active={props.filter ==="all"} onClick={setAll}>All</SuperButton>
                    <SuperButton active={props.filter ==="high"} onClick={setHigh}>High</SuperButton>
                    <SuperButton active={props.filter ==="middle"} onClick={setMiddle}>Middle</SuperButton>
                    <SuperButton active={props.filter ==="low"} onClick={setLow}>Low</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default Affairs
