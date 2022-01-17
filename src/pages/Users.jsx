import React from "react";
import {Outlet} from "react-router-dom";

export const Users = () => {
    return (
        <div>
            <h1 className="">Users page</h1>
            <Outlet />
        </div>
    )
}