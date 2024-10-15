"use client";

import * as React from "react";
import { Button, Box } from "@mui/material";
import { useState } from "react";

const Color: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<string>("Silver");

  const handleClick = (style: string) => {
    setSelectedStyle(style);
  };

  return (
    <div className="types">
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "3px", mb: "5px" }}
      >
        <span>Color:</span>
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
          onClick={() => handleClick("Silver")}
          color="info"
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            padding: "2px 13px",
          }}
        >
          Silver
        </Button>

        <Button
          variant="outlined"
          onClick={() => handleClick("Gray")}
          color="info"
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            padding: "2px 13px",
          }}
        >
          Gray
        </Button>
      </Box>
    </div>
  );
};

export default Color;
