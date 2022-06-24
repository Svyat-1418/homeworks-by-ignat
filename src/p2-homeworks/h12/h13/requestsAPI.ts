import axios from "axios"

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/"
})

export const requestsAPI = {
    postRequest(success: boolean) {
        return instance.post<ResponseType>("auth/test", {success})
    }
}

export type ResponseType = {
    errorText: string
    info: string
    yourBody: {succes: boolean}
    yourQuery: {}
}