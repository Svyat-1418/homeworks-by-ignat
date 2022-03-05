import React from 'react'
import styles from "./Message.module.css"

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropsType) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageAva}>
                    <img src={props.avatar} alt="Avatar"/>
                </div>
                <div className={styles.contentBlock}>
                    <div className={styles.nameAndMes}>
                        <h3>{props.name}</h3>
                        <p>
                            {props.message}
                        </p>
                    </div>
                    <div className={styles.timeRight}>{props.time}</div>
                </div>
            </div>
            <svg height="0" width="0">
                <defs>
                    <clipPath id="svgPath">
                        <path fill="#FFFFFF" d="M10,10H0V0H0A10,10,0,0,0,10,10Z"/>
                    </clipPath>
                </defs>
            </svg>
        </>
    )
}

export default Message
