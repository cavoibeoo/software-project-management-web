"use client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const OnlySidebarDarkMode: React.FC = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("left-sidebar-theme");
    if (storedPreference === "left-sidebar-dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem(
      "left-sidebar-theme",
      isDarkMode ? "left-sidebar-dark" : "light"
    );

    // Update the class on the <left-sidebar-dark> element to apply the selected mode
    const htmlElement = document.querySelector(".leftSidebarDark");
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
          Only Sidebar Dark/Light Mode
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

export default OnlySidebarDarkMode;
