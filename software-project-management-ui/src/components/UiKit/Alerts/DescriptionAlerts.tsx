"use client";

import React from "react";
import { Card, Typography, Alert, Stack, AlertTitle } from "@mui/material";

const DescriptionAlerts: React.FC = () => {
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
          Description Alerts
        </Typography>

        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success" sx={{ fontSize: "14px" }}>
            <AlertTitle>Success</AlertTitle>
            This is a success Alert with an encouraging title.
          </Alert>

          <Alert severity="info" sx={{ fontSize: "14px" }}>
            <AlertTitle>Info</AlertTitle>
            This is an info Alert with an informative title.
          </Alert>

          <Alert severity="warning" sx={{ fontSize: "14px" }}>
            <AlertTitle>Warning</AlertTitle>
            This is a warning Alert with a cautious title.
          </Alert>

          <Alert severity="error" sx={{ fontSize: "14px" }}>
            <AlertTitle>Error</AlertTitle>
            This is an error Alert with a scary title.
          </Alert>
        </Stack>
      </Card>
    </>
  );
};

export default DescriptionAlerts;
