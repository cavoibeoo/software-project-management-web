"use client";

import * as React from "react";
import {
  Card,
  Grid,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Checkbox,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MyDrive: React.FC = () => {
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
        }}
        className="rmui-card"
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            fontWeight: 700,
            mb: "25px",
          }}
          className="text-black"
        >
          My Drive
        </Typography>

        <Grid
          container
          spacing={3}
          columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
            <Box
              className="bg-primary-50"
              sx={{
                borderRadius: "7px",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Checkbox
                  sx={{
                    padding: "0",

                    "& .MuiSvgIcon-root": { fontSize: 22 },
                  }}
                  {...label}
                  className="dark-check"
                />

                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ padding: "0" }}
                  >
                    <MoreHorizIcon sx={{ fontSize: "25px" }} />
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
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: "35px",
                }}
              >
                <div className="text-primary">
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "45px" }}
                  >
                    folder_open
                  </i>
                </div>
                <Typography
                  fontWeight={700}
                  fontSize="15px"
                  className="text-black"
                >
                  Assets
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "35px",
                }}
              >
                <Typography className="text-black">387 Files</Typography>
                <Typography className="text-black">4.5 GB</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
            <Box
              className="bg-orange-50"
              sx={{
                borderRadius: "7px",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Checkbox
                  sx={{
                    padding: "0",

                    "& .MuiSvgIcon-root": { fontSize: 22 },
                  }}
                  {...label}
                  className="dark-check"
                />

                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ padding: "0" }}
                  >
                    <MoreHorizIcon sx={{ fontSize: "25px" }} />
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
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: "35px",
                }}
              >
                <div className="text-orange">
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "45px" }}
                  >
                    news
                  </i>
                </div>
                <Typography
                  fontWeight={700}
                  fontSize="15px"
                  className="text-black"
                >
                  Projects
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "35px",
                }}
              >
                <Typography className="text-black">123 Files</Typography>
                <Typography className="text-black">1.4 GB</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
            <Box
              className="bg-success-50"
              sx={{
                borderRadius: "7px",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Checkbox
                  sx={{
                    padding: "0",

                    "& .MuiSvgIcon-root": { fontSize: 22 },
                  }}
                  {...label}
                  className="dark-check"
                />

                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ padding: "0" }}
                  >
                    <MoreHorizIcon sx={{ fontSize: "25px" }} />
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
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: "35px",
                }}
              >
                <div className="text-success">
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "45px" }}
                  >
                    folder
                  </i>
                </div>
                <Typography
                  fontWeight={700}
                  fontSize="15px"
                  className="text-black"
                >
                  Personal
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "35px",
                }}
              >
                <Typography className="text-black">435 Files</Typography>
                <Typography className="text-black">5.2 GB</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
            <Box
              className="bg-purple-50"
              sx={{
                borderRadius: "7px",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Checkbox
                  sx={{
                    padding: "0",

                    "& .MuiSvgIcon-root": { fontSize: 22 },
                  }}
                  {...label}
                  className="dark-check"
                />

                <Box>
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ padding: "0" }}
                  >
                    <MoreHorizIcon sx={{ fontSize: "25px" }} />
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
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </Menu>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: "35px",
                }}
              >
                <div className="text-purple">
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "45px" }}
                  >
                    topic
                  </i>
                </div>
                <Typography
                  fontWeight={700}
                  fontSize="15px"
                  className="text-black"
                >
                  Templates
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "35px",
                }}
              >
                <Typography className="text-black">431 Files</Typography>
                <Typography className="text-black">1.3 GB</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default MyDrive;
