"use client";

import * as React from "react";
import { Card, Box, Typography } from "@mui/material";

const AdditionalInformation: React.FC = () => {
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
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "20px",
          }}
          className="text-black"
        >
          Additional Information
        </Typography>

        <Box>
          <Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
            <Typography
              component="span"
              className="text-body"
              sx={{ fontWeight: "normal" }}
            >
              Phone:
            </Typography>{" "}
            +1 444 266 5599
          </Box>

          <Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
            <Typography
              component="span"
              className="text-body"
              sx={{ fontWeight: "normal" }}
            >
              Address:
            </Typography>{" "}
            84 S. Arrowhead Court Branford
          </Box>

          <Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
            <Typography
              component="span"
              className="text-body"
              sx={{ fontWeight: "normal" }}
            >
              Orders:
            </Typography>{" "}
            696
          </Box>

          <Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
            <Typography
              component="span"
              className="text-body"
              sx={{ fontWeight: "normal" }}
            >
              Products:
            </Typography>{" "}
            9240
          </Box>

          <Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
            <Typography
              component="span"
              className="text-body"
              sx={{ fontWeight: "normal" }}
            >
              Events:
            </Typography>{" "}
            5
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default AdditionalInformation;
