"use client";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 7,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  // marginRight: 0,
  // marginLeft: "15px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginRight: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#757FEF",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "0",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "5",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    backgroundColor: "#F5F7FA",
    borderRadius: "7px",
    padding: theme.spacing(1.4, 0, 1.4, 2),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100px",
      "&:focus": {
        width: "100px",
      },
    },
    [theme.breakpoints.up("md")]: {
      width: "198px",
      "&:focus": {
        width: "210px",
      },
    },
  },
}));

const SearchForm: React.FC = () => {
  return (
    <>
      <form>
        <Search className="search-form">
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            placeholder="Search here.."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </form>
    </>
  );
};

export default SearchForm;
