import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper";
import { toast } from "react-toastify";



export const listAPI=createAsyncThunk("product/product/list",async()=>{
  const response=await axiosInstance.post("/product/list ")
  // post api acan be used as a get api
  console.log(response.data,"listapi");
  return response.data.data
})

export const removeAPI=createAsyncThunk("product/product/remove",async(formdata)=>{
    const response=await axiosInstance.post("/product/remove",formdata)
    console.log(response.data,"removeapi");
    return response.data
})

export const detailAPI=createAsyncThunk("product/product/detail/:id",async(id)=>{
  const response=await axiosInstance.get(`product/detail/${id}`)
  console.log(response.data,"detailapi");
  return response.data
})

export const updateAPI=createAsyncThunk("product/product/update",async(formdata)=>{
  const response=await axiosInstance.post("/product/update",formdata)
  return response.data
})

const ProductSlice=createSlice({
  name:"product",
  initialState:{
      proData:[],
      isLoading:false,
      error:null,
      status:"idle",
      singleData:[]
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder
    .addCase(listAPI.pending,(state,action)=>{
      state.isLoading=true
       
    })
    .addCase(listAPI.fulfilled,(state,action)=>{
       state.isLoading=false
       state.proData=action.payload
       state.error=null
   })
   .addCase(listAPI.rejected,(state,action)=>{
    state.isLoading=false
    state.proData=[]
    state.error=action.error.message
 })
 .addCase(removeAPI.pending,(state,action)=>{
     state.status="loading.."
 })
 .addCase(removeAPI.fulfilled,(state,action)=>{
    state.status="idle"
 })

 .addCase(removeAPI.rejected,(state,action)=>{
  state.status="idle"
})


.addCase(detailAPI.pending,(state,action)=>{
  state.isLoading=true
})
.addCase(detailAPI.fulfilled,(state,action)=>{
  state.isLoading=false
  state.singleData=action.payload
  state.error=null
})
.addCase(detailAPI.rejected,(state,action)=>{
  state.isLoading=false
  state.singleData=[]
  state.error=action.error.message

})
.addCase(updateAPI.pending,(state,action)=>{
    state.status="loading..."
})
.addCase(updateAPI.fulfilled,(state,action)=>{
    state.status='idle'
    if(action.payload.status===200){
      toast.success(action.payload.message)
    }
    else{
      if(action.payload.status===201){
        toast.error(action.payload.message)
      }
    }
})
.addCase(updateAPI.rejected,(state,action)=>{
     state.status="idle"
})
  }
})

export default ProductSlice.reducer