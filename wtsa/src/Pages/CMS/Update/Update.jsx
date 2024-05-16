
import React, { useState,useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { Box, TextField, Typography, Container, Button,Grid } from "@mui/material";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { detailAPI, updateAPI } from '../../../Slice/ProductSlice';
import { myproduct } from '../../../Helper/Helper';


export default function Update() {
  const{singleData,status}=useSelector((state)=>state.Product)
  console.log(singleData,"update");


  const {id}=useParams()

  console.log(id,"id");
  const dispatch=useDispatch()

  const[user,setUser]=useState({
    title:"",
    description:""
  })

  const [error, setError] = useState("");
  const [img, setimg] = useState("");

  useEffect(() => {
    dispatch(detailAPI(id));
  }, []);

  useEffect(() => {
    if (singleData ) {
      setUser({

        title: singleData.data?.title,
        description: singleData.data?.description,
        
      
      });
    }
  }, [singleData]);

  

  const validation = () => {
    let error = {};
    if (!user.title) {
      error.title = "Title is Required";
    }
    if (!user.description) {
      error.description = "Description is Required";
    }
    

    return error;
  };

  console.log(error);

  const SubmitInfo = async (e) => {
    e.preventDefault();
    setError(validation());


    // toast.success("Edit successfully");

    // const formdata = new FormData();

    const formdata = new FormData();
    formdata.append("title", user.title);
    formdata.append("id", id);
    formdata.append("description", user.description);
    formdata.append("image",img)

    // if (img) {
    //   formdata.append("image", img);
    // } else {
    //   formdata.append("image", singleData.data?.image);
    // }

    dispatch(updateAPI(formdata));


  };

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "title") {
      if (value.length === 0) {
        setError({ ...error, title: "Title is Required" });
        setUser({ ...user, title: "" });
      } else {
        setError({ ...error, title: "" });
        setUser({ ...user, title: value });
      }
    }
    if (name === "description") {
      if (value.length === 0) {
        setError({ ...error, description: " Description is Required" });
        setUser({ ...user, description: "" });
      } else {
        setError({ ...error, description: "" });
        setUser({ ...user, description: value });
      }
    }

   
  };


const handleImage = (e) => {
  const file = e.target.files[0];
  if (!file) {
    setError({ ...error, img: "image is required" });
    setimg(null);
  } else {
    setError({ ...error, img: "" });
    setimg(file);
  }
};


  return (
    <>
      <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: "80px" }}>
        <Typography textAlign={"center"} variant="h5">
          Update Data
        </Typography>

        <Box
          component="form"
          onSubmit={SubmitInfo}
          sx={{ margin: "20px", padding: "10px", alignItems: "center" }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="title"
            label="Enter The Title"
            name="title"
            value={user.title}
            onChange={postUserData}
            autoComplete="title"
            autoFocus
          />
          <span style={{ color: "red" }}> {error.title} </span>

          <TextField
            margin="normal"
            fullWidth
            id="description"
            label="Enter The Description"
            name="description"
            autoComplete="description"
            value={user.description}
            onChange={postUserData}
            autoFocus
          />
          <span style={{ color: "red", alignItems: "center" }}>
            {" "}
            {error.description}{" "}
          </span>




<Grid item xs={12}>
<input
 type="file" 
 name="image" 
 id="image" 
 onChange={handleImage} />




{/* {img!=="" && img!==null && img!==undefined?(<>
<img src={URL.createObjectURL(img)} alt="" c/>
</>):(<>{singleData.data?.image===""?(<>
<img  alt="" />
</>):(<>
<img src={myproduct(singleData.data?.image)} alt="" style={{height:"200px"}} />
</>)}</>)}
{img === "" && <p>Drag or drop content here</p>} */}
{/* <img src={myproduct(singleData.data?.image)} alt="" style={{height:"200px"}} /> */}





{img !== "" && img !== null && img !== undefined ? (
  <>
    <img src={URL.createObjectURL(img)} alt="" style={{height:"200px"}}/>
  </>
) : (
  <>
    <img src={myproduct(singleData.data?.image)} alt="" style={{height:"200px"}}/>
  </>
)}



</Grid>

         

        {status==="idle"     
        
        
        ?    (
          <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: "20px" }}
        >
          Submit
        </Button>
        )     :  (
          <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ marginTop: "20px" }}
        >
          Loading...
        </Button>
        )
        }
        </Box>
      </Box>
    </Container>
    </>  
     )
 }












 

























 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

















































// import { Box, Button, Container, TextField, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'
// // import SingleProduct from '../SingleProduct/SingleProduct'
// import { detailAPI, updateAPI } from '../../../Slice/ProductSlice'
// import { myproduct } from '../../../Helper/Helper'

// export default function Update() {

//   const{id}=useParams()
//   console.log(id,"id");
//   const dispatch=useDispatch()
//   const{singleData,status}=useSelector((state)=>state.Product)
//   console.log(singleData,"details");
//   useEffect(()=>{
//       dispatch(detailAPI(id))
//   },[detailAPI,id])

//   useEffect(()=>{
//     if(singleData){
//       setUser(
//         {
//           title:singleData?.data?.title,
//           description:singleData?.data?.description
//         }
//       )
//     }
//   },[singleData])
 

//   const [image,setImage]=useState("")

//   const[user,setUser]=useState({
//     title:"",
//     description:""
//   })

//   const[error,setError]=useState("")

//   const validation=()=>{
//     const error={}
//     if(!user.title){
//       error.title="Title is required"
//     }
//     if(!user.description){
//       error.description="Description is requird"
//     }
//     if(!image){
//       error.image="Image is required"
//     }
//     return error
//   }
//       const handleSubmit=()=>{
//       //  e.preventDefault()
//        setError(validation())
//        const formData=new FormData()
//        formData.append("title",user.title)
//        formData.append("description",user.description)
//        formData.append("image",image)
//        formData.append("id",id)
//        dispatch(updateAPI(formData))
//        console.log("hello everyone");
//       }

//       let name,value

//       const handleChange=(e)=>{
//         name=e.target.name 
//         value=e.target.value

//         if(name==="title"){
//           if(value.length===0){
//             setError({...error,title:"Title is required"})
//             setUser({...user,title:""})
//           }else{
//             setError({...error,title:""})
//             setUser({...user,title:value})
//           }
//         }
//         if(name==="description"){
//           if(value.length===0){
//             setError({...error,description:"Description is required"})
//             setUser({...user,description:""})
//           }else{
//             setError({...error,description:" "})
//             setUser({...user,description:value})
//           }
//         }
//       }
//       const handleImage=(e)=>{
//         const file=e.target.files[0]
//       if(!file){
//         setError({...error,image:"Image is required"})
//         setImage(null)
//       }
//       else{
//         setError({...error,image:""})
//         setImage(file)
//       }
//       }
//   return (
//     <center>
//       <Container component="main" maxWidth="xs">
//         <Box marginTop="100px">
//           <Typography variant='h4'>
//             Update
//           </Typography>
        

//         <form
        
//           >
//         <TextField 
        
//         name='title'  
//         autoFocus
//         value={user.title}
        
//         id='title'
//         label="Enter Title"
//         margin='normal'
//         fullWidth
//         onChange={handleChange}

//         />
//         <span style={{
//           color:"red"
//         }}>{error?.title}</span>
//         <TextField   
//         name='description'
//         id='deccription'
//         label="Enter Description"
//         fullWidth
//         autoFocus
//         value={user.description}
//         onChange={handleChange}
//         />
//         <span  style={{
//           color:"red"
//         }}>{error?.description}</span>

//        <TextField 
       
//        type='file'
//        name='image'
//        fullWidth
//        autoFocus
//        onChange={handleImage}
       
//        />

//        {image!==null && image!==undefined && image!==""  ?  
       
//       (
//         <>

//         <img src={URL.createObjectURL(image)} alt="" />
//         </>
//       )   :   (
//         <>
//         <img src={myproduct(singleData?.data?.image)} alt="" />
//         </>
//       )
//       }  
//        {status==="idle" ? 
       
//       (
//         <Button  variant='contained'   onSubmit={handleSubmit}>Submit</Button>
//       )     :   (
//         <Button variant='contained'>Loading...</Button>
//       )}
//         </form>
//         </Box>
//       </Container>
//     </center>
//   )
// }






























