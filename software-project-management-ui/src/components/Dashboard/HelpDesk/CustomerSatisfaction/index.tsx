"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import {
  Card,
  Box,
  Typography,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "@/components/Dashboard/HelpDesk/CustomerSatisfaction/CustomerSatisfaction.module.css";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CustomerSatisfaction: React.FC = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Chart
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [50, 15, 75, 50];

  const options: ApexOptions = {
    labels: ["Highly Satisfied", "Satisfied", "Low Satisfied", "Unsatisfied"],
    colors: ["#AD63F6", "#C2CDFF", "#FFAA72", "#0dcaf0"],
    stroke: {
      width: 1,
      show: true,
      colors: ["transparent"],
    },
    legend: {
      show: false,
      position: "top",
      fontSize: "12px",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 0,
      },
      labels: {
        colors: "#64748B",
      },
      markers: {
        offsetX: -2,
        offsetY: -0.5,
      },
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: "73%",
          labels: {
            show: false,
            name: {
              color: "#64748B",
            },
            value: {
              show: true,
              color: "#3A4252",
              fontSize: "28px",
              fontWeight: "600",
            },
            total: {
              show: true,
              color: "#64748B",
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
  };

  return (
    <>
      <Card
        sx={{
          bgcolor: "primary.main",
          position: "relative",
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
            mb: "30px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-white"
          >
            Customer Satisfaction
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreHorizIcon sx={{ fontSize: "25px", color: "#fff" }} />
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

        <div className={styles.customerSatisfactionContent}>
          <div className={styles.chart}>
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="donut"
                height={175}
                width={"100%"}
              />
            )}

            <Box className={styles.text} sx={{ textAlign: "center" }}>
              <span>Overall</span>
              <h6>98%</h6>
            </Box>
          </div>

          <Box
            sx={{ ml: "auto", mr: "auto", textAlign: "center" }}
            className={styles.image}
          >
            <Image
              src="/images/man-with-tablet.png"
              alt="man-with-tablet-image"
              width={117}
              height={113}
            />
          </Box>
        </div>
      </Card>
    </>
  );
};

export default CustomerSatisfaction;
