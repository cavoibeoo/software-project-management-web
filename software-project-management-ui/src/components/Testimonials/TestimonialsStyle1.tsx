"use client";

import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import Image from "next/image";

const TestimonialsStyle1: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          p: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          Testimonials Style - 1
        </Typography>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Box
              className="testimonial-item bg-gray border-radius"
              sx={{
                mb: "25px",
                padding: { xs: "20px", sm: "25px" },
              }}
            >
              <Box mb="10px">
                <Image
                  src="/images/users/user6.jpg"
                  width={100}
                  height={100}
                  alt="user-image"
                  className="rounded-circle"
                />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  marginBottom: "6px",
                }}
              >
                Sarah Johnson
              </Typography>

              <Typography component="span">Financial Manager</Typography>

              <Box
                className="ratings"
                sx={{
                  lineHeight: "1",
                  color: "#fe7a36",
                  fontSize: "16px",
                  my: "15px",
                }}
              >
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
              </Box>

              <Typography sx={{ lineHeight: "1.8" }}>
                "Statistics is the science of using data to make decisions. This
                is relevant in almost all fields of work and there are many
                opportunities for employment."
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Box
              className="testimonial-item bg-gray border-radius"
              sx={{
                mb: "25px",
                padding: { xs: "20px", sm: "25px" },
              }}
            >
              <Box mb="10px">
                <Image
                  src="/images/users/user7.jpg"
                  width={100}
                  height={100}
                  alt="user-image"
                  className="rounded-circle"
                />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  marginBottom: "6px",
                }}
              >
                Michael Smith
              </Typography>

              <Typography component="span">Software Developer</Typography>

              <Box
                className="ratings"
                sx={{
                  lineHeight: "1",
                  color: "#fe7a36",
                  fontSize: "16px",
                  my: "15px",
                }}
              >
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-half-fill mr-1"></i>
              </Box>

              <Typography sx={{ lineHeight: "1.8" }}>
                "Statistics is the science of using data to make decisions. This
                is relevant in almost all fields of work and there are many
                opportunities for employment."
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Box
              className="testimonial-item bg-gray border-radius"
              sx={{
                mb: "25px",
                padding: { xs: "20px", sm: "25px" },
              }}
            >
              <Box mb="10px">
                <Image
                  src="/images/users/user8.jpg"
                  width={100}
                  height={100}
                  alt="user-image"
                  className="rounded-circle"
                />
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                  fontSize: "18px",
                  marginBottom: "6px",
                }}
              >
                Emily Brown
              </Typography>

              <Typography component="span">Web Developer</Typography>

              <Box
                className="ratings"
                sx={{
                  lineHeight: "1",
                  color: "#fe7a36",
                  fontSize: "16px",
                  my: "15px",
                }}
              >
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
                <i className="ri-star-fill mr-1"></i>
              </Box>

              <Typography sx={{ lineHeight: "1.8" }}>
                "Statistics is the science of using data to make decisions. This
                is relevant in almost all fields of work and there are many
                opportunities for employment."
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default TestimonialsStyle1;
