"use client";

import * as React from "react";
import { Button, Box } from "@mui/material";
import { useState } from "react";

const Capacity: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<string>("512 GB");

  const handleClick = (style: string) => {
    setSelectedStyle(style);
  };

  return (
    <div className="types">
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "3px", mb: "5px" }}
      >
        <span>Capacity:</span>
        <span className="fw-medium text-black">{selectedStyle}</span>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => handleClick("512 GB")}
          color="info"
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            padding: "2px 13px",
          }}
        >
          512 GB
        </Button>

        <Button
          variant="outlined"
          onClick={() => handleClick("1 TB")}
          color="info"
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            padding: "2px 13px",
          }}
        >
          1 TB
        </Button>
      </Box>
    </div>
  );
};

export default Capacity;
