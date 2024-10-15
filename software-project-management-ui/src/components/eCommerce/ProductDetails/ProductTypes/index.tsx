"use client";

import * as React from "react";
import { Button, Box } from "@mui/material";
import { useState } from "react";

const ProductTypes: React.FC = () => {
  const [selectedStyle, setSelectedStyle] =
    useState<string>("Apple M1 Max Chip");

  const handleClick = (style: string) => {
    setSelectedStyle(style);
  };

  return (
    <div className="types">
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "3px", mb: "5px" }}
      >
        <span>Style:</span>
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
          onClick={() => handleClick("Apple M1 Max Chip")}
          color="info"
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            padding: "2px 13px",
          }}
        >
          Apple M1 Max Chip
        </Button>

        <Button
          variant="outlined"
          onClick={() => handleClick("Apple M1 Pro Chip")}
          color="info"
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            padding: "2px 13px",
          }}
        >
          Apple M1 Pro Chip
        </Button>
      </Box>
    </div>
  );
};

export default ProductTypes;
