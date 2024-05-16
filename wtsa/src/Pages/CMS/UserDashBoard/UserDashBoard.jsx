import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { profiledetailsAPI } from '../../../Slice/AuthSlice';



import { Box, Typography,Grid,OutlinedInput,FormLabel ,Card,CardContent,CardMedia, Button} from '@mui/material'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from '@mui/system';
import { profile_pic } from '../../../Helper/Helper';


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function UserDashBoard() {

  const{pData}=useSelector((state)=>state.Auth)
  console.log(pData,"userdata");

  const dispatch=useDispatch()
  useEffect(()=>{
      dispatch(profiledetailsAPI())
  },[])
  return (
    <div style={{marginBottom:"140px",justifyContent:"center",display:'flex'}}>
    <Box sx={{marginTop:"15rem",width:"21rem"}}>
        <Grid container sx={{height:"100px",width:"700px",display:"flex",justifyContent:"flex-start"}}>
            <Grid item xs={6} sm={6} md={6} lg={6} sx={{textAlign:"center",backgroundColor:"grey"}}>
               <img src={profile_pic(pData?.profile_pic)} alt=""                height={"100px"}
              width={"200px"}
              style={{ marginTop: "20px", borderRadius: "50%" }}
 />
                 <Box sx={{marginTop:"30px"}}>
                 
                      <div >
                      
                          <Typography variant='h5' sx={{color:"whitesmoke"}}>First Name: <b>{pData && pData.first_name}</b> </Typography>
                          <Typography variant='h5' sx={{color:"whitesmoke"}}>Last Name:  <b>{pData &&   pData.last_name} </b>  </Typography>
                          <Typography variant='h5' sx={{color:"whitesmoke"}}>Email Id:  <b>{pData && pData.email }</b>  </Typography>
                
                      </div>
      
                </Box>
                <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Typography sx={{ paddingLeft: "8px" ,color:"whitesmoke"}}>
                <FacebookIcon />
              </Typography>
              <Typography sx={{ paddingLeft: "8px",color:"whitesmoke" }}>
                <TwitterIcon />
              </Typography>
              <Typography sx={{ paddingLeft: "8px",color:"whitesmoke"}}>
                <InstagramIcon />
              </Typography>
            </Box>


            </Grid>
          
           

        </Grid>


      
      
    </Box>
    </div>  
  )
}
