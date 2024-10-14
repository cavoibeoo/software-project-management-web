"use client";

import * as React from "react";
import { Box } from "@mui/material";
import styles from "@/components/eCommerce/Search.module.css";

const SearchForm: React.FC = () => {
  return (
    <>
      <Box
        component="form"
        className={styles.searchBox}
        sx={{
          width: { sm: "265px" },
          mb: { xs: "10px", sm: "0" },
        }}
      >
        <label>
          <i className="material-symbols-outlined">search</i>
        </label>
        <input
          type="text"
          className={styles.inputSearch}
          placeholder="Search here....."
        />
      </Box>
    </>
  );
};

export default SearchForm;
