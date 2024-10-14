"use client";

import * as React from "react";
import {
  FormControl,
  InputLabel,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const DefaultSelect: React.FC = () => {
  const [favoriteFood, setFavoriteFood] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFavoriteFood(event.target.value as string);
  };

  return (
    <>
      <Box>
        <Typography
          component="label"
          sx={{
            fontWeight: "500",
            fontSize: "14px",
            mb: "15px",
            display: "block",
          }}
          className="text-black"
        >
          Default Select
        </Typography>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Favorite food</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={favoriteFood}
            label="Favorite food"
            onChange={handleChange}
            sx={{
              "& fieldset": {
                border: "1px solid #D5D9E2",
                borderRadius: "7px",
              },
            }}
          >
            <MenuItem value={0}>Steak</MenuItem>
            <MenuItem value={1}>Pizza</MenuItem>
            <MenuItem value={2}>Tacos</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default DefaultSelect;
