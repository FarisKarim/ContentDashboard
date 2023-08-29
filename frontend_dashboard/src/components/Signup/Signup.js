import React, { useState } from "react";
import axios from "axios";
import Canvas from "../Canvas/Canvas";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { styled } from "@mui/material/styles";
import "./Signup.css";

const Signup = () => {
  const defaultFormData = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  };
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form");
    // Validations
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!formData.first_name.trim()) {
      alert("First Name is required.");
      return;
    }

    if (!formData.last_name.trim()) {
      alert("Last Name is required.");
      return;
    }

    if (formData.password !== formData.password2) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/dashboard/api/register/",
        formData
      );
      if (response.status === 201) {
        console.log(`User: ${formData.first_name} has been registered!`);
        setFormData(defaultFormData);
      } else {
        console.log("Received unexpected status code:", response.status);
      }
      console.log(response.data);
    } catch (error) {
      console.error("There was an error registering", error);
    }
  };

  return (
    <>
      <Canvas />
      <Container component="main" maxWidth="xs" className="container">
        {/* <Avatar className="avatar">
        <LockOutlinedIcon />
      </Avatar> */}
        <Typography
          component="h1"
          variant="h5"
          className="signup-title"
          sx={{
            color: "white", 
            fontFamily: "'Roboto Mono', monospace",
          }}
        >
          Sign up
        </Typography>
        <form className="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoComplete="fname"
                value={formData.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                value={formData.last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Confirm Password"
                type="password"
                id="password2"
                value={formData.password2}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="button"
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Signup;
