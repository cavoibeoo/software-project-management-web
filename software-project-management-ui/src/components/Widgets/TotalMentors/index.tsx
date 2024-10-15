"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";

const TotalMentors: React.FC = () => {
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Typography component="span" sx={{ mb: "3px", display: "block" }}>
          Total Mentors
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px", lg: "20px" },
            fontWeight: 700,
          }}
          className="text-black"
        >
          1.5k
        </Typography>

        <Box
          className="text-orange bg-orange-100"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100px",
            width: "77px",
            height: "77px",
            mx: "auto",
            mt: "15px",
            mb: "15px",
          }}
        >
          <i className="material-symbols-outlined" style={{ fontSize: "32px" }}>
            group
          </i>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography component="span" sx={{ fontSize: "13px" }}>
              This Month
            </Typography>

            <Typography
              component="span"
              sx={{
                fontSize: "13px",
              }}
            >
              <i
                className="material-symbols-outlined text-success"
                style={{ fontSize: "20px" }}
              >
                trending_up
              </i>
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalMentors;
