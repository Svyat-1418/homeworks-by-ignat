import React from "react";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import s from "./HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import { useDispatch } from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some', 'brown'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)
    const didpatch = useDispatch()

    const onChangeTheme = (theme: string) => {
        didpatch(changeThemeAC(theme))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            <SuperSelect options={themes}
                         value={theme}
                         onChangeOption={onChangeTheme}
            />

            <hr/>
        </div>
    );
}

export default HW12;
