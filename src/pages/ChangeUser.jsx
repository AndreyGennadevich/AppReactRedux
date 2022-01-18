import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {userProfileAPI} from "../services/UserProfileService";
import {FormComponent} from "./Form";

export const ChangeUser = () => {

    const [changeUser, {}] = userProfileAPI.useChangeUserMutation();

    let params = useParams();

    const { data, error, isLoading} = userProfileAPI.useFetchUserQuery(params.id)

    const onSubmit = async (value) => {
        const user = {
            ...data.data,
            ...value
        }
        console.log(user)
        await changeUser(user);
    }

    return (
        <div className="container-sm">
            { isLoading && <h2>Loading...</h2>}
            { error && <h2>Произошла ошибка</h2> }
            {data && <FormComponent data={data.data} onSubmit={onSubmit}/>}
        </div>
    )
}