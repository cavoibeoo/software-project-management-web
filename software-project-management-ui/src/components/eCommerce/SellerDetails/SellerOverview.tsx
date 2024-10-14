"use client";

import * as React from "react";
import { Card, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const SellerOverview: React.FC = () => {
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
            Seller Overview
          </Typography>
        </Box>

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
            <Box
              className="pm-po-card bg-primary-50"
              sx={{
                padding: "22px 20px",
                borderRadius: "7px",
                mt: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box className="text-primary">
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "40px" }}
                  >
                    settings_account_box
                  </i>
                </Box>

                <div>
                  <Typography mb="3px">Total Orders</Typography>

                  <Typography
                    variant="h5"
                    fontSize={20}
                    mb={0}
                    fontWeight={700}
                    className="text-black"
                  >
                    7051
                  </Typography>
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "25px",
                }}
              >
                <Typography fontSize={13}>Order this month</Typography>

                <Typography
                  color="success"
                  sx={{
                    bgcolor: "#d8ffc8",
                    border: "1px solid #82FC5A",
                    borderRadius: "100px",
                    fontSize: "13px",
                    padding: "1.3px 8.3px",
                  }}
                >
                  +0.75%
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
            <Box
              className="pm-po-card bg-orange-50"
              sx={{
                padding: "22px 20px",
                borderRadius: "7px",
                mt: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box className="text-orange">
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "40px" }}
                  >
                    settings_timelapse
                  </i>
                </Box>

                <div>
                  <Typography mb="3px">Total Earnings</Typography>

                  <Typography
                    variant="h5"
                    fontSize={20}
                    mb={0}
                    fontWeight={700}
                    className="text-black"
                  >
                    $23.91k
                  </Typography>
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "25px",
                }}
              >
                <Typography fontSize={13}>Earnings this month</Typography>

                <Typography
                  className="text-danger"
                  sx={{
                    bgcolor: "#ffe1dd",
                    border: "1px solid #ffcea9",
                    borderRadius: "100px",
                    fontSize: "13px",
                    padding: "1.3px 8.3px",
                  }}
                >
                  -1.25%
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
            <Box
              className="pm-po-card bg-success-50"
              sx={{
                padding: "22px 20px",
                borderRadius: "7px",
                mt: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box className="text-success">
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "40px" }}
                  >
                    assignment_return
                  </i>
                </Box>

                <div>
                  <Typography mb="3px">Total Refunds</Typography>

                  <Typography
                    variant="h5"
                    fontSize={20}
                    mb={0}
                    fontWeight={700}
                    className="text-black"
                  >
                    178
                  </Typography>
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "25px",
                }}
              >
                <Typography fontSize={13}>Refunds this month</Typography>

                <Typography
                  color="success"
                  sx={{
                    bgcolor: "#d8ffc8",
                    border: "1px solid #82FC5A",
                    borderRadius: "100px",
                    fontSize: "13px",
                    padding: "1.3px 8.3px",
                  }}
                >
                  +4.75%
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
            <Box
              className="pm-po-card bg-purple-50"
              sx={{
                padding: "22px 20px",
                borderRadius: "7px",
                mt: "25px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box className="text-purple">
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "40px" }}
                  >
                    discover_tune
                  </i>
                </Box>

                <div>
                  <Typography mb="3px">Conversion Rate</Typography>

                  <Typography
                    variant="h5"
                    fontSize={20}
                    mb={0}
                    fontWeight={700}
                    className="text-black"
                  >
                    12.21%
                  </Typography>
                </div>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "25px",
                }}
              >
                <Typography fontSize={13}>
                  Conversion rate this month
                </Typography>

                <Typography
                  color="success"
                  sx={{
                    bgcolor: "#d8ffc8",
                    border: "1px solid #82FC5A",
                    borderRadius: "100px",
                    fontSize: "13px",
                    padding: "1.3px 8.3px",
                  }}
                >
                  +1.11%
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default SellerOverview;
