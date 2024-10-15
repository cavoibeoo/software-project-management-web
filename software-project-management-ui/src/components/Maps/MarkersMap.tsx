"use client";

import * as React from "react";
import { Card, Typography } from "@mui/material";

const MarkersMap: React.FC = () => {
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
          Markers Map
        </Typography>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48374.312678948365!2d-74.21707476084916!3d40.73134319969024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2538cdf40ffff%3A0xdc3c46d2765f6a68!2sPerfect%20Near%20NYC!5e0!3m2!1sen!2sbd!4v1678355353682!5m2!1sen!2sbd"
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

export default MarkersMap;
