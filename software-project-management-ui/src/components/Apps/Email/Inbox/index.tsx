"use client";

import React from "react";
import { Card, Box, Menu, MenuItem, IconButton, Checkbox } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Tooltip from "@mui/material/Tooltip";
import InboxNavLinks from "../InboxNavLinks";
import PrimaryEmails from "./PrimaryEmails";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Inbox: React.FC = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
          position: "relative",
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                {...label}
                sx={{
                  padding: "0",

                  "& .MuiSvgIcon-root": { fontSize: 25 },
                }}
                className="dark-check"
              />

              <Box>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <ArrowDropDownIcon sx={{ fontSize: "20px" }} />
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,

                    sx: {
                      overflow: "visible",
                      boxShadow: "0 4px 45px #0000001a",
                      mt: 0,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "left", vertical: "top" }}
                  anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                >
                  <MenuItem>All</MenuItem>
                  <MenuItem>None</MenuItem>
                  <MenuItem>Read</MenuItem>
                  <MenuItem>Unread</MenuItem>
                  <MenuItem>Starred</MenuItem>
                  <MenuItem>Unstarred</MenuItem>
                </Menu>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Tooltip title="Archive" arrow>
                  <IconButton aria-label="archive" size="small">
                    <i
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px" }}
                    >
                      archive
                    </i>
                  </IconButton>
                </Tooltip>

                <Tooltip title="Report Spam" arrow>
                  <IconButton aria-label="help" size="small">
                    <i
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px" }}
                    >
                      help_clinic
                    </i>
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete" arrow>
                  <IconButton aria-label="delete" size="small">
                    <i
                      className="material-symbols-outlined"
                      style={{ fontSize: "18px" }}
                    >
                      delete
                    </i>
                  </IconButton>
                </Tooltip>
              </Box>

              <Box>
                <IconButton
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "18px" }}
                  >
                    more_vert
                  </i>
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,

                    sx: {
                      overflow: "visible",
                      boxShadow: "0 4px 45px #0000001a",
                      mt: 0,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "left", vertical: "top" }}
                  anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
                >
                  <MenuItem>Mark as unread</MenuItem>
                  <MenuItem>Snooze</MenuItem>
                  <MenuItem>Read</MenuItem>
                  <MenuItem>Add star</MenuItem>
                  <MenuItem>Mark as important</MenuItem>
                  <MenuItem>Mark as not important</MenuItem>
                  <MenuItem>Forward as attachment</MenuItem>
                  <MenuItem>Filter</MenuItem>
                  <MenuItem>Mute</MenuItem>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* InboxNavLinks */}
        <InboxNavLinks />

        {/* PrimaryEmails */}
        <PrimaryEmails />
      </Card>
    </>
  );
};

export default Inbox;
