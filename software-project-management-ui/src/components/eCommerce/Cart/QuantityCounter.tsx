"use client";

import * as React from "react";
import { useState } from "react";
import { Box } from "@mui/material";

const QuantityCounter: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "102px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#ecf0ff",
          borderRadius: "7px",
        }}
      >
        <button
          onClick={decrement}
          className="bg-transparent text-body"
          style={{
            fontSize: "20px",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            left: "5px",
            top: "4px",
          }}
        >
          -
        </button>

        <input
          type="number"
          value={quantity}
          readOnly
          style={{
            backgroundColor: "#ecf0ff",
            width: "100%",
            textAlign: "center",
            border: "none",
            padding: "9.5px 10px 9.5px 20px",
            borderRadius: "7px",
          }}
        />

        <button
          onClick={increment}
          className="bg-transparent text-body"
          style={{
            fontSize: "20px",
            border: "none",
            cursor: "pointer",
            position: "absolute",
            right: "5px",
            top: "4px",
          }}
        >
          +
        </button>
      </Box>
    </>
  );
};

export default QuantityCounter;
