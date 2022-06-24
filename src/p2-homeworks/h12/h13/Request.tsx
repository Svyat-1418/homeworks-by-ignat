import React, {useEffect, useState} from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI, ResponseType} from "./requestsAPI";
import styles from "./Request.module.css"

export const Request = () => {
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState<ResponseType | null>(null)

    const onSendRequest = () => {
        requestsAPI.postRequest(success)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            setData(error.response ? error.response.data.errorText : error.message)
        })
    }
    
    return (
        <div>
            <SuperCheckbox checked={success}
                           onChangeChecked={setSuccess}
            />
            <SuperButton onClick={onSendRequest}>
                Send Request

            </SuperButton>
            <div className={styles.responseDataBlock}>
                {JSON.stringify(data)}
            </div>
        </div>
    )
}