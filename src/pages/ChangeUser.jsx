import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {userProfileAPI} from "../services/UserProfileService";
import {Form} from "./Form";

export const ChangeUser = () => {

    const [changeUser, {}] = userProfileAPI.useChangeUserMutation();

    let params = useParams();

    const { data, error, isLoading} = userProfileAPI.useFetchUserQuery(params.id)

    // const handleInputChange = (event) => {
    //     const value = {
    //         ...data,
    //         [event.target.name]: event.target.value
    //     }
    //     setUserData(value)
    // }
    //






    const onSubmit = async (that) => {
        that.preventDefault()
        const value = {
            ...data.data,
            "email": that.target.avatar.value,
            "first_name": that.target.first_name.value,
            "last_name": that.target.last_name.value,
            "avatar": that.target.avatar.value
        }
        await changeUser(value);
    }

    return (
        <div className="container-sm">
            { isLoading && <h2>Loading...</h2>}
            { error && <h2>Произошла ошибка</h2> }
            {data && <Form data={data.data} onSubmit={onSubmit}/>}
        </div>
    )
}