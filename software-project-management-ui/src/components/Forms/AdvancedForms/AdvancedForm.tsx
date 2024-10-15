"use client";

import React from "react";
import {
  Grid,
  Card,
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import Link from "next/link";

const AdvancedForm: React.FC = () => {
  return (
    <>
      <Box component="form">
        <Card
          sx={{
            boxShadow: "none",
            borderRadius: "7px",
            mb: "25px",
            padding: { xs: "18px", sm: "20px", lg: "25px" },
          }}
          className="rmui-card"
        >
          <Box
            sx={{
              mb: "25px",
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              Advanced Form
            </Typography>
          </Box>

          <Grid
            container
            spacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          >
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Box>
                <FormControl fullWidth>
                  <Typography
                    component="label"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "10px",
                      display: "block",
                    }}
                    className="text-black"
                  >
                    Email Address
                  </Typography>

                  <TextField
                    label="Enter email address"
                    variant="filled"
                    type="email"
                    id="email"
                    name="email"
                    required
                    sx={{
                      "& .MuiInputBase-root": {
                        border: "1px solid #D5D9E2",
                        backgroundColor: "#fff",
                        borderRadius: "7px",
                      },
                      "& .MuiInputBase-root::before": {
                        border: "none",
                      },
                      "& .MuiInputBase-root:hover::before": {
                        border: "none",
                      },
                    }}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Box>
                <FormControl fullWidth>
                  <Typography
                    component="label"
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      mb: "10px",
                      display: "block",
                    }}
                    className="text-black"
                  >
                    Your Password
                  </Typography>

                  <TextField
                    label="Enter your password"
                    variant="filled"
                    type="password"
                    id="password"
                    name="password"
                    required
                    sx={{
                      "& .MuiInputBase-root": {
                        border: "1px solid #D5D9E2",
                        backgroundColor: "#fff",
                        borderRadius: "7px",
                      },
                      "& .MuiInputBase-root::before": {
                        border: "none",
                      },
                      "& .MuiInputBase-root:hover::before": {
                        border: "none",
                      },
                    }}
                  />
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FormControlLabel control={<Checkbox />} label="Remember me" />

                <Link href="#" className="text-primary">
                  Forgot Password?
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  borderRadius: "6px",
                  fontWeight: "500",
                  fontSize: "16px",
                  padding: "10px 24px",
                  color: "#fff !important",
                  boxShadow: "none",
                  display: "block",
                  width: "100%",
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>

          <Divider sx={{ my: "20px" }}>or sign in with</Divider>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              style={{
                display: "inline-block",
                textAlign: "center",
                borderRadius: "100%",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                color: "#fff",
                background: "#3a559f",
              }}
            >
              <i className="ri-facebook-fill"></i>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              style={{
                display: "inline-block",
                textAlign: "center",
                borderRadius: "100%",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                color: "#fff",
                background: "#03a9f4",
              }}
            >
              <i className="ri-twitter-x-fill"></i>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              style={{
                display: "inline-block",
                textAlign: "center",
                borderRadius: "100%",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                color: "#fff",
                background: "#007ab9",
              }}
            >
              <i className="ri-linkedin-fill"></i>
            </a>

            <a
              href="mailto:micheal@gmail.com"
              style={{
                display: "inline-block",
                textAlign: "center",
                borderRadius: "100%",
                width: "30px",
                height: "30px",
                lineHeight: "30px",
                color: "#fff",
                background: "#000",
              }}
            >
              <i className="ri-github-line"></i>
            </a>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default AdvancedForm;
