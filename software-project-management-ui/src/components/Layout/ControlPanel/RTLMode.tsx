"use client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";

const RTLMode: React.FC = () => {
  const [dirAttribute, setDirAttribute] = useState<string>("ltr");

  useEffect(() => {
    const storedDirAttribute = localStorage.getItem("dirAttribute");
    if (storedDirAttribute) {
      setDirAttribute(storedDirAttribute);
      document.documentElement.setAttribute("dir", storedDirAttribute);
    }
  }, []);

  const handleButtonClick = () => {
    const newDirAttribute = dirAttribute === "ltr" ? "rtl" : "ltr";
    setDirAttribute(newDirAttribute);
    localStorage.setItem("dirAttribute", newDirAttribute);
    document.documentElement.setAttribute("dir", newDirAttribute);
  };

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
          RTL/LTR Mode
        </Typography>

        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: "13px",
            boxShadow: "none",
            color: "#fff !important",
          }}
          onClick={handleButtonClick}
        >
          Switch to RTL/LTR
        </Button>
      </Box>
    </>
  );
};

export default RTLMode;
