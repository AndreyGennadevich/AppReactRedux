import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
    endpoints: (build) =>  ({
        fetchAllUsers: build.query({
            query: (page= 1) => ({
                url: `/users`,
                params: {
                    page: page
                }
            })
        })
    })
})