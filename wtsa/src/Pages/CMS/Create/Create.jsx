import React, { useState } from "react";
import { Box, TextField, Typography, Container, Button } from "@mui/material";
// import axiosInstance from "../Helper/Helper";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createAPI } from "../../../Slice/CreateSlice";

function Create() {
  const { status } = useSelector((state) => state.Create);
  console.log(status);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState("");
  const [img, setimg] = useState("");
  const validation = () => {
    let error = {};
    if (!user.title) {
      error.title = "Title is Required";
    }
    if (!user.description) {
      error.description = "Description is Required";
    }
    if (!img) {
      error.img = "Image is required";
    }
    return error;
  };

  console.log(error);

  const SubmitInfo = async (e) => {
    e.preventDefault();
    setError(validation());
    // toast.success("Create in successfully");

    const formdata = new FormData();

    formdata.append("title", user.title);
    formdata.append("description", user.description);
    formdata.append("image", img);
    dispatch(createAPI(formdata));
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

   const handleImage=(e)=>{
    const file=e.target.files[0]
    if(!file){
      setError({...error,img:"Image is required"})
      setimg(null)
    }else{
      setimg(file)
    }
   }

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: "80px" }}>
        <Typography textAlign="center" variant="h5">
          Create Data
        </Typography>

        <Box
          component="form"
          onSubmit={SubmitInfo}
          sx={{ margin: "20px", padding: "10px" }}
          boxShadow={5}
        >
          <TextField
            margin="normal"
            fullWidth
            id="title"
            label="Enter The Title"
            name="title"
            onChange={postUserData}
            autoComplete="title"
            autoFocus
          />
          <span style={{ color: "red" }}>
            {""} {error.title}
            {""}{" "}
          </span>

          <TextField
            margin="normal"
            fullWidth
            id="description"
            label="Enter The Description"
            name="description"
            autoComplete="description"
            onChange={postUserData}
            autoFocus
          />
          <span style={{ color: "red" }}>
            {""} {error.description}
            {""}{" "}
          </span>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              {" "}
              Image
            </label>
            <input
              type="file"
              // onChange={(e) => setimg(e.target.files[0])}
              onChange={handleImage}
              name="img"
              accept="image/*"
              class="form-control"
            />

            <span style={{ color: "red" }}>
              {""} {error.img}
              {""}{" "}
            </span>

            {/* {img !== "" && img !== undefined && img !== null ? (
              <img
                style={{ height: "180px" }}
                src={URL.createObjectURL(img)}
                alt=""
                className="upload-img"
              />
            ) : (
              <>{img === "" && <p>Drag or drop content here</p>}</>
            )} */}

            {img    &&   
            
            <img src={URL.createObjectURL(img)} alt="" />
            
            }
          </div>

          {status === "idle" ? (
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              type="submit"
              // onClick={handelSubmit}
            >
              Create
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
      </Box>
    </Container>
  );
}

export default Create;
