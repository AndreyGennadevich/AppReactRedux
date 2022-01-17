import React from "react";
import {Form} from "./Form";
import {userProfileAPI} from "../services/UserProfileService";

export const AddUser = () => {

    const [changeUser, {}] = userProfileAPI.useAddUserMutation();

    const onSubmit = async (that) => {
        that.preventDefault()
        const value = {
            "email": that.target.avatar.value,
            "first_name": that.target.first_name.value,
            "last_name": that.target.last_name.value,
            "avatar": that.target.avatar.value
        }
        await changeUser(value);
    }

    return (
        <div className="container-sm">
            <h1>Add user</h1>
            <Form onSubmit={onSubmit} />
        </div>
    )
}