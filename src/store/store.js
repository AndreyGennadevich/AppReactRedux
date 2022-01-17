import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userAPI} from "../services/AllUsersService";
import {userProfileAPI} from "../services/UserProfileService";

const rootReducer = combineReducers({
    [userAPI.reducerPath]: userAPI.reducer,
    [userProfileAPI.reducerPath]: userProfileAPI.reducer
})

export const setupStore= () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userAPI.middleware).concat(userProfileAPI.middleware)
    })
}
