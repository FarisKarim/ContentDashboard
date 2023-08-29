import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Grid, Container, Typography } from "@mui/material";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/dashboard/api/login/",
        formData
      );
      if (response.status === 200) {
        console.log("Successfully logged in!");
        // Add logic to store JWT or handle user session
      } else {
        console.log("Received unexpected status code:", response.status);
      }
    } catch (error) {
      console.error("There was an error logging in", error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="typing-demo">Welcome.</div>
      </div>
      <div className="login-container">
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5" className="login-title">
            Welcome back!
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className="custom-input"
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
              <Grid item xs={12}>
                <TextField
                  className="custom-input"
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formData.password}
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
              Login
            </Button>
          </form>
        </Container>
      </div>
    </>
  );
};

export default Login;
