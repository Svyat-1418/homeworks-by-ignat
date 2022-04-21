import {UserType} from "../HW8";

type HomeWorkReducerActionsType =
    { type: 'sort', payload: 'up' }
    | { type: 'sort', payload: 'down' }
    | { type: 'check', payload: 18 }

export const homeWorkReducer = (state: UserType[], action: HomeWorkReducerActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const stateCopy = [...state]
            if (action.payload === "up") stateCopy.sort((a, b) => a.name.toUpperCase() <
            b.name.toUpperCase() ? -1 : 1)
            else if (action.payload === "down") stateCopy.sort((a, b) => b.name.toUpperCase() <
            a.name.toUpperCase() ? -1 : 1)
            return stateCopy
        }
        case 'check': {
            // need to fix
            return state.filter(u => u.age >= action.payload).sort((a, b) =>
                a.age - b.age)
        }
        default:
            return state
    }
}