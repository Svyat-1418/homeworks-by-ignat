const initState = {
    theme: 'dark'
};

export const themeReducer =
    (state: InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

type InitStateType = typeof initState
type ChangeThemeActionType = {type: "CHANGE_THEME", theme: string}
type ActionsType = ChangeThemeActionType

export const changeThemeAC = (theme: string): ChangeThemeActionType =>
    ({type: "CHANGE_THEME", theme} as const); // fix any