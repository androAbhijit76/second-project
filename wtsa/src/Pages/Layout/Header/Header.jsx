import React,{ useContext, useState} from 'react'
import { Grid,AppBar, Toolbar, Typography, Tabs, Tab, Box, Button,useTheme,useMediaQuery, useColorScheme } from '@mui/material'

import { Link } from 'react-router-dom';

import DrawerComp from '../../../Components/DrawerComp';
import { FiShoppingCart } from "react-icons/fi";

import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { isLoggedOut } from '../../../Slice/AuthSlice';


function Header() {

  const{isloggedIn}=useSelector((state)=>state.Auth)
  const dispatch=useDispatch()

  

    const[value,setValue]=useState()

    const theme=useTheme()
    console.log(theme)
    const isMatch=useMediaQuery(theme.breakpoints.down("md"))
    console.log(isMatch)
    const handleLogOut=()=>{
      dispatch(isLoggedOut())
    }
   
  return (
    
    <AppBar>
     <Toolbar>
     

       { isMatch ? <>
       

        <DrawerComp/>

        
       </> : <Grid  container  alignItems="center" justifyContent="center">
            <Grid item xs={2}>
                <Typography variant='h6' sx={{fontWeight:"700",marginLeft:"20px"}}>
                    <img src="https://eduma.thimpress.com/wp-content/uploads/2024/03/logo-landing-1.png" alt="" />
                </Typography>
            </Grid>
            <Grid item xs={12} lg={10} sm={10} md={10}  sx={{ display: 'flex', justifyContent: 'revert-layer' }}>

            
                <Tabs sx={{marginLeft:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} >
                  

<Button sx={{fontSize:"18px"}} color='inherit' component={Link}  to='/'>User/DashBoard</Button>   
 <Button sx={{fontSize:"18px"}} color='inherit'component={Link}  to='/products'>Product</Button>
 
 
{isloggedIn  ?  (
  <Button onClick={handleLogOut}  sx={{fontSize:"18px"}} color='inherit'>Logout</Button>
) : (
  <Button sx={{fontSize:"18px"}} color='inherit'component={Link}  to='/login'>Login</Button>
) }


                </Tabs>
                </Grid>
                 <Grid xs={1}/>   
            </Grid>} 
        
     </Toolbar>
    </AppBar>

    
    
  )
}

export default Header








