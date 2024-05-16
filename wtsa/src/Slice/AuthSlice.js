import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axiosInstance from "../Helper/Helper";
import axiosInstance from "../Helper/Helper";
import { toast } from "react-toastify";
// import { registrationAPI } from './AuthSlice';




export const registrationAPI=createAsyncThunk("auth/user/signup",async(formdata)=>{
  const response=await axiosInstance.post("/user/signup",formdata)
  console.log(response.data,"regis");
  return response.data
})

export const loginAPI=createAsyncThunk("auth/user/signin",async(formdata)=>{
  const response=await axiosInstance.post("/user/signin",formdata)
  return response.data
})

export const profiledetailsAPI=createAsyncThunk("auth/user/profile-details",async()=>{
    const response=await axiosInstance.get("/user/profile-details")
    console.log(response.data,"userdashboard");
    return response.data.data
})


const AuthSlice=createSlice({
  name:"auth",
  initialState:{
    status:"idle",
    isLoading:false,
    pData:[],
    error:null,
    isloggedIn:false
  },
  reducers:{

    isLoggedOut(state,action){
       localStorage.removeItem("token")
       state.isloggedIn=false
    }

  },
  extraReducers:(builder)=>{
    builder
    .addCase(registrationAPI.pending,(state)=>{
      state.status="loading..."
    })
    .addCase(registrationAPI.fulfilled,(state,action)=>{
      state.status="idle"
      if(action.payload.status===200){
        // localStorage.setItem("Name",payload?.data?.first_name);
        // localStorage.setItem("image", payload?.data?.profile_pic);
        // localStorage.setItem("email",payload?.data?.email)
        toast.success(action.payload.message)
      }
      else{
        if(action.payload.status===201){
          toast.error(action.payload.message)
        }
      }
    })
    .addCase(registrationAPI.rejected,(state)=>{
      state.status="idle"
    })

    .addCase(loginAPI.pending,(state)=>{
      state.status="loading.."
    })

    .addCase(loginAPI.fulfilled,(state,action)=>{
      state.status="idle"
      if(action.payload?.status===200){

      localStorage.setItem("token",action.payload?.token)
        toast.success(action.payload?.message)
        state.isloggedIn=true
      }
      else{
        if(action.payload?.status===201){
          toast.error(action.payload?.message)
        }
      }
    })

    .addCase(loginAPI.rejected,(state,action)=>{
      state.status="idle"
    })


    .addCase(profiledetailsAPI.pending,(state,action)=>{
      state.isLoading=true
    })
    .addCase(profiledetailsAPI.fulfilled,(state,action)=>{
      state.isLoading=false 
      state.pData=action.payload
      state.error=null
    })
    .addCase(profiledetailsAPI.rejected,(state,action)=>{
      state.isLoading=false
      state.pData=[]
      state.error=action.error.message
    })
  }
})

export const{isLoggedOut}=AuthSlice.actions

export default AuthSlice.reducer