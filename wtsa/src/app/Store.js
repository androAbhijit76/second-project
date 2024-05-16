
import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../Slice/AuthSlice";
import ProductSlice from "../Slice/ProductSlice";
import CreateSlice from "../Slice/CreateSlice";




export const store=configureStore({
    reducer:{
        Auth:AuthSlice,
        Product:ProductSlice,
        Create:CreateSlice
       
    }
})
export default store