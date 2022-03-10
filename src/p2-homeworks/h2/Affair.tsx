import React from 'react'
import styles from "./Affair.module.css"
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={styles.someClass}>
            {props.affair.name}
            <button className={styles.btnDel} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
