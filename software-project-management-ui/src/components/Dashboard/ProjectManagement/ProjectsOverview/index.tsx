"use client";

import * as React from "react";
import { Card, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const ProjectsOverview: React.FC = () => {
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
            Projects Overview
          </Typography>
        </Box>

        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                    folder_open
                  </i>
                </Box>

                <Box>
                  <Typography
                    component="span"
                    mb="3px"
                    sx={{ display: "block" }}
                  >
                    Total Projects
                  </Typography>

                  <Typography
                    variant="h5"
                    fontSize={20}
                    mb={0}
                    fontWeight={700}
                    className="text-black"
                  >
                    1235
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "25px",
                }}
              >
                <Typography component="span" fontSize={13}>
                  Projects this month
                </Typography>

                <Typography
                  component="span"
                  color="success"
                  sx={{
                    bgcolor: "#d8ffc8",
                    border: "1px solid #82FC5A",
                    borderRadius: "100px",
                    fontSize: "13px",
                    padding: "1.3px 8.3px",
                  }}
                >
                  +10%
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                    stacks
                  </i>
                </Box>

                <Box>
                  <Typography
                    component="span"
                    mb="3px"
                    sx={{ display: "block" }}
                  >
                    Active Projects
                  </Typography>

                  <Typography
                    variant="h5"
                    fontSize={20}
                    mb={0}
                    fontWeight={700}
                    className="text-black"
                  >
                    425
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "25px",
                }}
              >
                <Typography component="span" fontSize={13}>
                  Projects this month
                </Typography>

                <Typography
                  component="span"
                  color="success"
                  sx={{
                    bgcolor: "#d8ffc8",
                    border: "1px solid #82FC5A",
                    borderRadius: "100px",
                    fontSize: "13px",
                    padding: "1.3px 8.3px",
                  }}
                >
                  +10%
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                    assignment_turned_in
                  </i>
                </Box>

                <Box>
                  <Typography
                    component="span"
                    mb="3px"
                    sx={{ display: "block" }}
                  >
                    Finished Projects
                  </Typography>

                  <Typography
                    variant="h5"
                    fontSize={20}
                    mb={0}
                    fontWeight={700}
                    className="text-black"
                  >
                    135
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "25px",
                }}
              >
                <Typography component="span" fontSize={13}>
                  Projects this month
                </Typography>

                <Typography
                  component="span"
                  className="text-danger"
                  sx={{
                    bgcolor: "#ffe1dd",
                    border: "1px solid #ffcea9",
                    borderRadius: "100px",
                    fontSize: "13px",
                    padding: "1.3px 8.3px",
                  }}
                >
                  -15%
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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
                    group
                  </i>
                </Box>

                <Box>
                  <Typography
                    component="span"
                    mb="3px"
                    sx={{ display: "block" }}
                  >
                    Team Members
                  </Typography>

                  <Typography
                    variant="h5"
                    fontSize={20}
                    mb={0}
                    fontWeight={700}
                    className="text-black"
                  >
                    65+
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Typography component="span" fontSize={13}>
                  Hard Worker
                </Typography>

                <AvatarGroup
                  total={59}
                  sx={{
                    "& .MuiAvatar-root": {
                      border: "2px solid #fff",
                      backgroundColor: "#f0f0f0",
                      color: "#000",
                      width: "28px",
                      height: "28px",
                    },
                    "& .MuiAvatarGroup-avatar": {
                      backgroundColor: "#605dff", // Custom background color for the total avatar
                      color: "#fff", // Custom color for the text
                      fontSize: "10px",
                    },
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/images/users/user15.jpg" />
                  <Avatar alt="Travis Howard" src="/images/users/user14.jpg" />
                  <Avatar alt="Agnes Walker" src="/images/users/user13.jpg" />
                  <Avatar alt="Trevor Le" src="/images/users/user12.jpg" />
                </AvatarGroup>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ProjectsOverview;
