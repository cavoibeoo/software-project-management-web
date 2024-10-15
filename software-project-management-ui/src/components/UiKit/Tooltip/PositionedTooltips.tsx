"use client";

import React from "react";
import { Card, Typography, Tooltip, Box, Grid, Button } from "@mui/material";

const PositionedTooltips: React.FC = () => {
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
          Positioned Tooltips
        </Typography>

        <Box sx={{ width: 500 }}>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="top-start">
                <Button>top-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top">
                <Button>top</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top-end">
                <Button>top-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Tooltip title="Add" placement="left-start">
                <Button>left-start</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left">
                <Button>left</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left-end">
                <Button>left-end</Button>
              </Tooltip>
            </Grid>
            <Grid
              item
              container
              xs={6}
              alignItems="flex-end"
              direction="column"
            >
              <Grid item>
                <Tooltip title="Add" placement="right-start">
                  <Button>right-start</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right">
                  <Button>right</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right-end">
                  <Button>right-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="bottom-start">
                <Button>bottom-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom">
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom-end">
                <Button>bottom-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default PositionedTooltips;
