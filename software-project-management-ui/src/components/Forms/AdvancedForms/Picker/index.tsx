"use client";

import React from "react";
import { Grid, Card, Box, Typography } from "@mui/material";
import DatePickerInput from "./DatePickerInput";
import TimePickerInput from "./TimePickerInput";
import DateTimePickerInput from "./DateTimePickerInput";

const Picker: React.FC = () => {
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
            Picker
          </Typography>
        </Box>

        <Grid
          container
          spacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid item xs={12} md={12} lg={12} xl={4}>
            <DatePickerInput />
          </Grid>

          <Grid item xs={12} md={12} lg={12} xl={4}>
            <DateTimePickerInput />
          </Grid>

          <Grid item xs={12} md={12} lg={12} xl={4}>
            <TimePickerInput />
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default Picker;
