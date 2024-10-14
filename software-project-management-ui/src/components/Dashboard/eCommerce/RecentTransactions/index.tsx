"use client";

import React from "react";
import {
  Card,
  Box,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RecentTransactions: React.FC = () => {
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
            Recent Transactions
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
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
              <MenuItem>This Day</MenuItem>
              <MenuItem>This Week</MenuItem>
              <MenuItem>This Month</MenuItem>
              <MenuItem>This Year</MenuItem>
            </Menu>
          </Box>
        </Box>

        <Box>
          {/* Master Card */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                className="text-primary bg-primary-100"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                  width: "41px",
                  height: "41px",
                }}
              >
                <i className="material-symbols-outlined">credit_card</i>
              </Box>

              <Box>
                <Typography
                  className="text-black"
                  component="div"
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Master Card
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  16 Jun 2024 - 7:12 pm
                </Typography>
              </Box>
            </Box>

            <Typography component="span" className="text-success">
              +1,520
            </Typography>
          </Box>

          {/* Paypal */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                className="text-danger bg-danger-100"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                  width: "41px",
                  height: "41px",
                }}
              >
                <i className="material-symbols-outlined">redeem</i>
              </Box>

              <Box>
                <Typography
                  className="text-black"
                  component="div"
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Paypal
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  15 Jun 2024 - 1:42 am
                </Typography>
              </Box>
            </Box>

            <Typography component="span" className="text-danger">
              -2,250
            </Typography>
          </Box>

          {/* Wise */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                className="text-purple bg-purple-100"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                  width: "41px",
                  height: "41px",
                }}
              >
                <i className="material-symbols-outlined">account_balance</i>
              </Box>

              <Box>
                <Typography
                  className="text-black"
                  component="div"
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Wise
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  14 Jun 2024 - 4:21 pm
                </Typography>
              </Box>
            </Box>

            <Typography component="span" className="text-success">
              +3,560
            </Typography>
          </Box>

          {/* Payoneer */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                className="text-secondary bg-secondary-100"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                  width: "41px",
                  height: "41px",
                }}
              >
                <i className="material-symbols-outlined">currency_ruble</i>
              </Box>

              <Box>
                <Typography
                  className="text-black"
                  component="div"
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Payoneer
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  13 Jun 2024 - 2:42 am
                </Typography>
              </Box>
            </Box>

            <Typography component="span" className="text-success">
              +6,500
            </Typography>
          </Box>

          {/* Credit Card */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Box
                className="text-success bg-success-100 "
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "100px",
                  width: "41px",
                  height: "41px",
                }}
              >
                <i className="material-symbols-outlined">credit_score</i>
              </Box>

              <Box>
                <Typography
                  className="text-black"
                  component="div"
                  sx={{
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  Credit Card
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "13px", display: "block" }}
                >
                  12 Jun 2024 - 3:20 pm
                </Typography>
              </Box>
            </Box>

            <Typography component="span" className="text-danger">
              -4,320
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default RecentTransactions;
