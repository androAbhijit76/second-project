
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { detailAPI } from '../../../Slice/ProductSlice'
import { myproduct } from '../../../Helper/Helper'
import { Box, Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';

export default function SingleProduct() {
  const { id } = useParams();
  const { singleData } = useSelector((state) => state.Product);
  console.log(singleData,"singledata");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailAPI(id));
  }, [dispatch, id]);

  return (
    <>
      <Box marginTop={12}>
        <Grid container sx={{ marginTop: "20px" }} spacing={3}>
          <Grid item md={6} lg={6} sm={6} xs={12}>
            <Card>
              {singleData && singleData.data && singleData.data.image && (
                <CardMedia
                  component="img"
                  height="470px"
                  image={myproduct(singleData.data.image)}
                  alt="test image"
                />
              )}
            </Card>
          </Grid>

          <Grid item md={6} lg={6} sm={6} xs={12}>
            <CardContent>
              <Typography variant="h4" textAlign="center" marginBottom={2}>
                Product Detail
              </Typography>
              <hr />
              <Typography variant="h4" textAlign="center">
                {singleData && singleData.data && singleData.data.title}
              </Typography>
              <Typography variant="h6" textAlign="center" mt={2}>
                {singleData && singleData.data && singleData.data.description}
              </Typography>

              <Link to={`/update/${id}`}>
                <Button
                  variant='contained'
                  sx={{ marginLeft: "19rem", width: "6rem", marginTop: "2rem" }}
                >
                  Edit
                </Button>
              </Link>
            </CardContent>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}






// It looks like the error is occurring because singleData is undefined when you're trying to access singleData.data.image. This could be happening because singleData might not be fully populated yet when the component renders for the first time.

// To handle this, you can add a conditional check to ensure that singleData and singleData.data are both defined before accessing their properties. Here's how you can modify your code:

