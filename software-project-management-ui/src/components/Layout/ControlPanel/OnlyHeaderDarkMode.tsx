"use client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const OnlyHeaderDarkMode: React.FC = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("top-navbar-dark-theme");
    if (storedPreference === "top-navbar-dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem(
      "top-navbar-dark-theme",
      isDarkMode ? "top-navbar-dark" : "light"
    );

    // Update the class on the .top-navbar-dark element to apply the selected mode
    const htmlElement = document.querySelector(".top-navbar-dark");
    if (htmlElement) {
      if (isDarkMode) {
        htmlElement.classList.add("dark-theme");
      } else {
        htmlElement.classList.remove("dark-theme");
      }
    }
  }, [isDarkMode]);

  return (
    <>
      <Box sx={{ mb: "30px" }}>
        <Typography
          component="h2"
          sx={{
            fontSize: "16px",
            fontWeight: 500,
            mb: "15px",
            pb: "5px",
          }}
          className="text-black border-bottom"
        >
          Only Header Dark/Light Mode
        </Typography>

        <Button
          onClick={handleToggle}
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: "13px",
            boxShadow: "none",
            color: "#fff !important",
          }}
        >
          Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>
    </>
  );
};

export default OnlyHeaderDarkMode;
