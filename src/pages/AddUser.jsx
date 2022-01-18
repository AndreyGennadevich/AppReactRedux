import React from "react";
import {FormComponent} from "./Form";
import {userProfileAPI} from "../services/UserProfileService";

export const AddUser = () => {

    const [changeUser, {}] = userProfileAPI.useAddUserMutation();

    const onSubmit = async (value) => {
        await changeUser(value);
    }

    return (
        <div>
            <h1>Add user</h1>
            <FormComponent onSubmit={onSubmit} />
        </div>
    )
}