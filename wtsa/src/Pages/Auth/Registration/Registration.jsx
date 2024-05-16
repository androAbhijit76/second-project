
import React, { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registrationAPI } from "../../../Slice/AuthSlice";

function Copyright(props) { 
   
  return (
  
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}



const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const defaultTheme = createTheme();

export default function Registration() {
  
  const {status}=useSelector((state)=> state.Auth  )
  
  console.log(status);

  const dispatch=useDispatch()

  
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [photo	, setPhoto] = useState();

  const validation = () => {
    let error = {};

    if (!user.first_name) {
      error.first_name = "First Name is Required";
    }
    if (!user.last_name) {
      error.last_name = "Last Name is Required";
    }
    if (!user.email) {
      error.email = "Email is Required";
    }
    if (!user.password) {
      error.password = "Password is Required";
    }
    if(!photo){
      error.photo="Image is required"
    }
    return error;
  };





  const image_change = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError({ ...error, photo: "Image is required" });
      setPhoto(null);
    } else {
      setError({ ...error, photo: "" });

      setPhoto(file);
      // console.log(file);
    }
  };
  





  console.log(error);
  const SubmitInfo =async (e) => {

  
    e.preventDefault();
    setError(validation());
    const formdata=new FormData()
    formdata.append("first_name",user.first_name)
    formdata.append("last_name",user.last_name)
    formdata.append("email",user.email)
    formdata.append("password",user.password)
    formdata.append("photo", photo);

    dispatch(registrationAPI(formdata))

// for json format  

// const formdata={
//   first_name:user.first_name,
//   last_name:user.last_name,
//   email:user.email,
//   password:user.password,
  
// }

setUser({
  first_name:"",
  last_name:"",
  email:"",
  password:"",
  profile_pic:""
})
    
  }


  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is Required" });
        setUser({ ...user, email: "" });
      } else {
        setError({ ...error, email: "" });
        setUser({ ...user, email: value });
      }
    }
    if (name === "password") {
      if (value.length === 0) {
        setError({ ...error, password: "Password name is Required" });
        setUser({ ...user, password: "" });
      } else {
        setError({ ...error, password: "" });
        setUser({ ...user, password: value });
      }
    }
    if (name === "firstName") {
      if (value.length === 0) {
        setError({ ...error, first_name: "First Name is Required" });
        setUser({ ...user, first_name: "" });
      } else {
        setError({ ...error, first_name: "" });
        setUser({ ...user, first_name: value });
      }
    }
    if (name === "lastName") {
      if (value.length === 0) {
        setError({ ...error, last_name: "Last Name is Required" });
        setUser({ ...user, last_name: "" });
      } else {
        setError({ ...error, last_name: "" });
        setUser({ ...user, last_name: value });
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <ToastContainer /> */}

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
            {/* <Typography variant="h5">CREATE ACCOUNT</Typography> */}
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={SubmitInfo} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={user.first_name}
                  onChange={postUserData}
                  autoFocus
                />
                <span style={{ color: "red" }}>{""} {error.first_name}{""} </span>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={user.last_name}
                  onChange={postUserData}
                />
                <span style={{ color: "red" }}> {""}{error.last_name} {""}</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={postUserData}
                />
                <span style={{ color: "red" }}>{""} {error.email}{""} </span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={user.password}
                  onChange={postUserData}
                />
                <span style={{ color: "red" }}> {""}{error.password}{""} </span>
              </Grid>


              <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                 Image{" "}
                  </label>
                  <input
                    type="file"
                    onChange={image_change}
                   
                    name="img"
                    accept="image/*"
                    class="form-control"
                  />

                  {/* {photo !== "" && photo !== undefined && photo !== null ? (
                    <img
                      style={{ height: "180px" }}
                      src={URL.createObjectURL(photo)}
                      alt=""
                      className="upload-img"
                    />
                  ) : (
                    <>{photo === "" && <p>Drag or drop content here</p>}</>
                  )} */}
                  


{photo ? (
  <img
    style={{ height: "180px" }}
    src={URL.createObjectURL(photo)}
    alt=""
    className="upload-img"
  />
) : (
  <p>Drag or drop content here</p>
)}

                </div>
                <span style={{color:"red"}}>
                   {""}
                   {error.photo}
                   {""}

                </span>


              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
           

       {status==="idle" ? (
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                type="submit"
                
              >
                SIGN UP
              </Button>
            ) : (
              <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              type="submit"
              
            >
             Loading.....
            </Button>
            )}

          
          </Box>


          <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"} variant="body2" style={{cursor:"pointer"}}>
                Already have an account? Sign in

                </Link>
              </Grid>
            </Grid>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}






















