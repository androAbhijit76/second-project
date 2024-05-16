import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAPI, removeAPI } from '../../../Slice/ProductSlice'
import { myproduct } from '../../../Helper/Helper'
// import {Link} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

import { Box, Typography,Card,CardMedia,CardContent,CardActions,Button } from '@mui/material'

export default function Products() {

  const {proData}=useSelector((state)=> state.Product )
  console.log(proData,"allproductdata");
  

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(listAPI())
  },[dispatch])


  // const handleRemove=(id)=>{


  //   const formData = new FormData();
  //   formData.append("id", id);
  //   // dispatch(removeAPI(formData))

  //   dispatch(removeAPI(formData)).then(() => dispatch(listAPI(formData)));
    
    
  // }




  const handleDelete=(formData)=>{
    dispatch(removeAPI(formData)).then(() => dispatch(listAPI(formData)));
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  
  }
  
      const handleRemove=(id)=>{
        

        


          const formData = new FormData();
    formData.append("id", id);
  // dispatch(removeAPI(formData)).then(() => dispatch(listAPI(formData)));
  
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
          handleDelete(formData)
          }
        });
  
      }
  
  return (
    <>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",marginTop:"90px",gap:"2rem",marginBottom:"20rem"}}>
    { Array.isArray(proData)  &&
        proData.map((item,index)=> 
        <Card sx={{maxWidth:"300px"}}>
        <CardMedia  
         sx={{height:"260px"}}
         image={myproduct(item.image)}
        />
        <CardContent>
         <Typography gutterBottom variant='h5' component="div">
            {item.title}
         </Typography>
         <Typography variant='body2' color="text.secondary">
           {item.description}
         </Typography>

        
        </CardContent>
        <CardActions>
        <Button variant='outlined' size='small' onClick={()=>handleRemove(item._id)}> Delete </Button>

    {/* <Link to={`/edit/${item._id}`}><Button variant='outlined' size='small' 
      > Edit </Button></Link> */}

      <Link to={`/singleproduct/${item._id}`}><Button variant='contained'>Details</Button></Link>

      {/* <Link to={`/profile/${item._id}`}> <Button variant='contained' alignItems="center" onClick={()=>handleOrder(item)} >Book Now</Button></Link> */}

        </CardActions>


         </Card>
        
        )
    }
    {/* {open && (
        <SweetAlertComponent
          confirm={handleDeleted}
          cancle={() => setOpen(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover!"}
        />
      )} */}





</div>
    </>
  )
}
