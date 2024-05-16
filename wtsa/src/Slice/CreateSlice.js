import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";
// import { createApi } from "@reduxjs/toolkit/query";
// import { craeteAPI } from './CreateSlice';
import { toast } from "react-toastify";



export const createAPI=createAsyncThunk("create/",async(formdata)=>{
    const response=await axiosInstance.post("product/create",formdata)

    console.log(response.data,"craeteapi");

    return response.data
})
 const CreateSlice=createSlice({
  name:"create",
  initialState:{
    status:"idle"
  },
  reducers:{

  },
  extraReducers:(builder)=>{
    builder
    .addCase(createAPI.pending,(state)=>{
      state.status="loading..."
    })
    .addCase(createAPI.fulfilled,(state,action)=>{
      state.status="idle"
      if(action.payload.status===200){
        toast.success(action.payload.message)
      }
      else{
        if(action.payload.status===201){
          toast.error(action.payload.message)
        }
      }
    })
    .addCase(createAPI.rejected,(state)=>{
      state.status="idle"
    })
  }
 })

 export default CreateSlice.reducer