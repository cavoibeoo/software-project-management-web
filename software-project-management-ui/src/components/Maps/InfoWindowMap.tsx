"use client";

import * as React from "react";
import { Card, Typography } from "@mui/material";

const InfoWindowMap: React.FC = () => {
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
            mb: "25px",
          }}
          className="text-black"
        >
          InfoWindow Map
        </Typography>

        <iframe
          src="https://www.google.com/maps/d/embed?mid=1rQt1Hl5N5hmUTaW5Gei3gsAii1o&ehbc=2E312F"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            width: "100%",
            height: "400px",
            border: "none",
          }}
        ></iframe>
      </Card>
    </>
  );
};

export default InfoWindowMap;
