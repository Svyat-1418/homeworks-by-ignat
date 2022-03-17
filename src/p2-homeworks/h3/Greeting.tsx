import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

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
            <div className={s.content}>
                <div className={s.addItem}>
                    <input value={name}
                           onChange={setNameCallback}
                           onKeyPress={onKeyPressHandler}
                           className={s.textField}
                    />
                    <button className={s.btn} onClick={addUser}>+</button>
                </div>
                <div className={s.countUsers}>{totalUsers}</div>
                {error && <div className={s.error}>{error}</div>}
            </div>
        </div>
    )
}

export default Greeting
