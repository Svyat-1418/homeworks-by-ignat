import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        onChangeOption &&  onChangeOption(e.currentTarget.value)
    }

    const fullRadioClassNave = `${s.radio}`

    const mappedOptions: any[] = options ? options.map((option, index) => ( // map options with key
        <label key={name + '-' + index}>
            <input
                type={'radio'}
                name={name}
                checked={option === value}
                onChange={onChangeCallback}
                value={option}
                className={fullRadioClassNave}
                // name, checked, value, onChange
            />
            {option}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
