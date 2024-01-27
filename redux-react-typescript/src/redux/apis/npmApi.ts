// Importing necessary functions from Redux Toolkit Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Creating an API slice
const npmApi = createApi({
    reducerPath: "npmApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://registry.npmjs.org/-/v1/search?text=",
    }),
    endpoints: (builder) => ({
        getPackage: builder.query({
            query: (name) => {
                return {
                    url: name,
                    // when is method get we don't need to specify it
                    // but i did it for the sake of clarity
                    method: "GET",
                };
            },
        }),
    }),
});

export default npmApi
export const { useGetPackageQuery } = npmApi;