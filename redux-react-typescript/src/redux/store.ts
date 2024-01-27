import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import npmApi, { useGetPackageQuery } from "./apis/npmApi";

const store = configureStore({
    reducer: {
        [npmApi.reducerPath]: npmApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(npmApi.middleware),
});

// Setting up listeners for the Redux store
// These listeners can react to actions dispatched to the Redux store
setupListeners(store.dispatch);

export default store;
export { useGetPackageQuery };
