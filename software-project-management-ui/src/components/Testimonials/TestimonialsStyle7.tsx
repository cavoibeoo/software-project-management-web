"use client";

import React from "react";
import { Grid, Card, Typography, Box } from "@mui/material";
import Image from "next/image";

const TestimonialsStyle7: React.FC = () => {
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
          Testimonials Style - 7
        </Typography>

        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box
              className="testimonial-item"
              sx={{
                mb: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  mb: "15px",
                }}
              >
                <Box>
                  <Image
                    src="/images/users/user6.jpg"
                    width={100}
                    height={100}
                    alt="user-image"
                    className="rounded-circle"
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
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
                      mt: "10px",
                    }}
                  >
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                  </Box>
                </Box>
              </Box>

              <Typography
                className="text-black"
                sx={{
                  fontWeight: "500",
                  fontStyle: "italic",
                  lineHeight: "1.8",
                }}
              >
                "Statistics is the science of using data to make decisions. This
                is relevant in almost all fields of work and there are many
                opportunities for employment."
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box
              className="testimonial-item"
              sx={{
                mb: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  mb: "15px",
                }}
              >
                <Box>
                  <Image
                    src="/images/users/user7.jpg"
                    width={100}
                    height={100}
                    alt="user-image"
                    className="rounded-circle"
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
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
                      mt: "10px",
                    }}
                  >
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                  </Box>
                </Box>
              </Box>

              <Typography
                className="text-black"
                sx={{
                  fontWeight: "500",
                  fontStyle: "italic",
                  lineHeight: "1.8",
                }}
              >
                "Statistics is the science of using data to make decisions. This
                is relevant in almost all fields of work and there are many
                opportunities for employment."
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Box
              className="testimonial-item"
              sx={{
                mb: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  mb: "15px",
                }}
              >
                <Box>
                  <Image
                    src="/images/users/user8.jpg"
                    width={100}
                    height={100}
                    alt="user-image"
                    className="rounded-circle"
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "16px", sm: "18px" },
                      marginBottom: "6px",
                    }}
                  >
                    Emily Brown
                  </Typography>

                  <Typography component="span">IT Manager</Typography>

                  <Box
                    className="ratings"
                    sx={{
                      lineHeight: "1",
                      color: "#fe7a36",
                      fontSize: "16px",
                      mt: "10px",
                    }}
                  >
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                    <i className="ri-star-fill mr-1"></i>
                  </Box>
                </Box>
              </Box>

              <Typography
                className="text-black"
                sx={{
                  fontWeight: "500",
                  fontStyle: "italic",
                  lineHeight: "1.8",
                }}
              >
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

export default TestimonialsStyle7;
