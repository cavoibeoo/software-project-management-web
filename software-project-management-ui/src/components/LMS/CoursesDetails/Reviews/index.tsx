"use client";

import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ManageReviews from "./ManageReviews";

const Reviews: React.FC = () => {
  return (
    <>
      <Box
        className="bg-white pd-description"
        sx={{
          padding: "25px",
          borderRadius: "0px 0px 7px 7px",
          mb: "25px",
        }}
      >
        <Grid
          container
          alignItems="center"
          spacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid item xs={12} sm={6} lg={6} xl={8}>
            <Box
              className="rating-item"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                className="ratings"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
              </Box>

              <Box
                sx={{
                  bgcolor: "#ecf0ff",
                  width: "100%",
                  height: "4px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    width: "85%",
                    height: "4px",
                  }}
                ></Box>
              </Box>

              <span className="number d-block">359</span>
            </Box>

            <Box
              className="rating-item"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                className="ratings"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
              </Box>

              <Box
                sx={{
                  bgcolor: "#ecf0ff",
                  width: "100%",
                  height: "4px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    width: "50%",
                    height: "4px",
                  }}
                ></Box>
              </Box>
              <span className="number d-block">208</span>
            </Box>

            <Box
              className="rating-item"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                className="ratings"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
              </Box>

              <Box
                sx={{
                  bgcolor: "#ecf0ff",
                  width: "100%",
                  height: "4px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    width: "35%",
                    height: "4px",
                  }}
                ></Box>
              </Box>
              <span className="number d-block">124</span>
            </Box>

            <Box
              className="rating-item"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                className="ratings"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
              </Box>

              <Box
                sx={{
                  bgcolor: "#ecf0ff",
                  width: "100%",
                  height: "4px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    width: "15%",
                    height: "4px",
                  }}
                ></Box>
              </Box>
              <span className="number d-block">89</span>
            </Box>

            <Box
              className="rating-item"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box
                className="ratings"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "18px" }}
                ></i>
              </Box>

              <Box
                sx={{
                  bgcolor: "#ecf0ff",
                  width: "100%",
                  height: "4px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: "primary.main",
                    width: "5%",
                    height: "4px",
                  }}
                ></Box>
              </Box>
              <span className="number d-block">4</span>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} lg={6} xl={4}>
            <Box
              className="overall-reviews"
              sx={{
                textAlign: "center",
              }}
            >
              <Typography
                variant="h2"
                className="text-black"
                sx={{
                  fontWeight: "700",
                  fontSize: "40px !important",
                  lineHeight: "1",
                  mb: "5px !important",
                }}
              >
                4.28
              </Typography>

              <Box
                className="all-ratings"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  mb: "10px",
                }}
              >
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "30px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "30px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "30px" }}
                ></i>
                <i
                  className="ri-star-fill"
                  style={{ color: "#ee8336", fontSize: "30px" }}
                ></i>
                <i
                  className="ri-star-line"
                  style={{ color: "#ee8336", fontSize: "30px" }}
                ></i>
              </Box>
              <span className="d-block">of 3250 Reviews</span>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <ManageReviews />
    </>
  );
};

export default Reviews;
