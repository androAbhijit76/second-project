
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// // import Link from '@mui/material/Link';
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useState } from 'react';
// import axios from 'axios';
// import axiosIntance from '../../../Helper/Helper';
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from 'react-redux';
// import { loginAPI } from '../../../Slice/AuthSlice';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

 



// const defaultTheme = createTheme();

// export default function Login() {

//   const dispatch=useDispatch()
//   const {status}=useSelector((state)=>state.Auth)
 
//   // const navigate=useNavigate()

//   // const[loading,setLoading]=useState(true)
  
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");


//   const validation = () => {
//     let error = {};
//     if (!user.email) {
//       error.email = "Email is Required";
//     }
//     if (!user.password) {
//       error.password = "Password is Required";
//     }
//     return error;
//   };

//   console.log(error);
//   const SubmitInfo = async(e) => {
//     e.preventDefault();
//     setError(validation());
//     const formdata=new FormData()
    
//     formdata.append("email",user.email)
//     formdata.append("password",user.password)

//     dispatch(loginAPI(formdata))
//     setUser({
//       email:"",
//       password:""
//     })
      
    
//   };

//   let name, value;
//   const postUserData = (e) => {
//     name = e.target.name;
//     value = e.target.value;

//     if (name === "email") {
//       if (value.length === 0) {
//         setError({ ...error, email: "Email is Required" });
//         setUser({ ...user, email: "" });
//       } else {
//         setError({ ...error, email: "" });
//         setUser({ ...user, email: value });
//       }
//     }
//     if (name === "password") {
//       if (value.length === 0) {
//         setError({ ...error, password: "Password name is Required" });
//         setUser({ ...user, password: "" });
//       } else {
//         setError({ ...error, password: "" });
//         setUser({ ...user, password: value });
//       }
//     }
  
//   };


 

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={SubmitInfo} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               onChange={postUserData}
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//              <span style={{color:"red"}}>
//     {" "}
//         {error.email}{" "}
//     </span>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               onChange={postUserData}
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//               <span style={{color:"red"}}>
//     {" "}
//         {error.password}{" "}
//     </span>
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
          


//             {status==="idle" ? (
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 fullWidth
//                 size="large"
//                 type="submit"
//                 // onClick={handelSubmit}
//               >
//                 SIGN IN
//               </Button>
//             ) : (
//               <Button
//               variant="contained"
//               color="secondary"
//               fullWidth
//               size="large"
//               type="submit"
              
//             >
//              Loading.....
//             </Button>
//             )}


//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link to="/regis" variant="body2" style={{cursor:"pointer"}}>
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }























































// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginAPI } from "../../../Slice/AuthSlice";
import { Link } from "react-router-dom";

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

const defaultTheme = createTheme();

export default function Login() {

  const dispatch=useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit = (data) => {
    let formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    dispatch(loginAPI(formData))
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
          {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              {...register("email", { required: true, maxLength: 20 })}
              autoComplete="email"
              autoFocus
              error={errors.email}
              helperText={errors.email && "Email is required"}
            /> */}

<TextField
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid email format",
                },
              })}
              label="Your Email"
              fullWidth
              margin="normal"
              variant="outlined"
              error={errors.email}
              helperText={errors.email && errors.email.message}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              {...register("password", { required: true, maxLength: 20 })}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={errors.password}
              helperText={errors.password && "Password is required"}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/regis" variant="body2" style={{cursor:"pointer"}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
