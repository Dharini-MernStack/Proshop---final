import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../constants";


const baseQuery = fetchBaseQuery({baseUrl:BASE_URL});
export const apiSlice = createApi({
baseQuery,
tagTypes:['Product','Order','User'],
endpoints:(builder)=>({})
});
// redux tool that wraps the application
//api slice is like a parent for the rest of the api slices like product , order and users
//endpoints here is blank in parent , but in product api slice , we are injectingEndpoints in to the aprent APi Slice
//Thats why we dont have reducer in store

// theres one endpoint getProductsApiQuery , it is going to hit the products, get requestt query and use it in homescreen to get l;oading screen and error
