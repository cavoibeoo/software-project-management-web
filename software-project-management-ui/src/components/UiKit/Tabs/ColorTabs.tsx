"use client";

import React from "react";
import { Card, Typography, Box, Tabs, Tab } from "@mui/material";

const ColorTabs: React.FC = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
          ColorTabs
        </Typography>

        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="primary tabs example"
          >
            <Tab value="one" label="Item One" sx={{ fontWeight: "600" }} />
            <Tab value="two" label="Item Two" sx={{ fontWeight: "600" }} />
            <Tab value="three" label="Item Three" sx={{ fontWeight: "600" }} />
          </Tabs>
        </Box>
      </Card>
    </>
  );
};

export default ColorTabs;
