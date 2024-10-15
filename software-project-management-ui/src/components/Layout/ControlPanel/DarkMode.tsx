"use client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const DarkMode: React.FC = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("theme");
    if (storedPreference === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update the class on the <html> element to apply the selected mode
    const htmlElement = document.querySelector("html");
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
          Dark/Light Mode
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

export default DarkMode;
