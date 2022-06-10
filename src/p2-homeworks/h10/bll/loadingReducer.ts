const initState = {
    isLoading: false
}

type InitStateType = typeof initState

export const loadingReducer =
    (state: InitStateType = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        case "LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: "LOADING"
    isLoading: boolean
}
export const loadingAC = (isLoading: boolean): LoadingActionType =>
    ({type: "LOADING", isLoading}) // fix any