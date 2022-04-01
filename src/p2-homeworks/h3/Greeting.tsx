import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, onKeyPressHandler, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)

    return (
        <div className={s.container}>
            <div className={s.addUser}>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPressHandler}
                    error={error}
                />
                <SuperButton className={s.btn} onClick={addUser}>Add</SuperButton>
            </div>
            <div className={s.countUsers}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
