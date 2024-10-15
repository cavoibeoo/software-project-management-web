"use client";

import * as React from "react";
import {
  Card,
  Box,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SearchForm from "./SearchForm";

const ProductsFilter: React.FC = () => {
  // Select
  const [select, setSelect] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSelect(event.target.value as string);
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
        <Box
          sx={{
            display: { sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              fontWeight={500}
              fontSize={18}
              className="text-black"
              sx={{
                mb: { xs: "10px", sm: "0" },
              }}
            >
              Filter
            </Typography>
          </Box>

          <Box
            sx={{
              display: { sm: "flex" },
              alignItems: "center",
              gap: "20px",
            }}
          >
            <SearchForm />

            <FormControl
              sx={{ minWidth: { xs: "100%", sm: "130px" } }}
              size="small"
            >
              <InputLabel id="demo-select-small">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="select"
                onChange={handleChange}
                className="select"
              >
                <MenuItem value={0}>Default Sorting</MenuItem>
                <MenuItem value={1}>Price Low to High</MenuItem>
                <MenuItem value={2}>Price High to Low</MenuItem>
                <MenuItem value={3}>Top Sales</MenuItem>
                <MenuItem value={4}>Newest Arrivals</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default ProductsFilter;
