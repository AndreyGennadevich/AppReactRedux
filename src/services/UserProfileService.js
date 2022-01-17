import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const userProfileAPI = createApi({
    reducerPath: 'userProfileAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
    endpoints: (build) =>  ({
        fetchUser: build.query({
            query: (id) => ({
                url: `/users/${id}`
            })
        }),
        changeUser: build.mutation({
            query: (post) => ({
                url: `/users/${post.id}`,
                method: 'PUT',
                body: post
            })
        }),
        addUser: build.mutation({
            query: (post) => ({
                url: `/users`,
                method: 'POST',
                body: post
            })

        })
    })
})