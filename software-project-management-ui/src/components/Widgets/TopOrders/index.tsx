"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TopOrders: React.FC = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Completed",
      data: [80, 55, 60, 55, 80],
    },
    {
      name: "Pending",
      data: [50, 85, 60, 70, 60],
    },
  ];

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#1F64F1", "#C2CDFF"],
    plotOptions: {
      bar: {
        columnWidth: "85%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      show: true,
      colors: ["transparent"],
    },
    grid: {
      show: true,
      borderColor: "#ffffff",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      labels: {
        show: false,
        style: {
          colors: "#8695AA",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
      labels: {
        style: {
          colors: "#64748B",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
        color: "#ECEEF2",
      },
      axisTicks: {
        show: false,
        color: "#ECEEF2",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "%";
        },
      },
    },
    legend: {
      show: false,
      fontSize: "12px",
      position: "bottom",
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
            justifyContent: "space-between",
            mb: "25px",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: "4px",
                gap: "10px",
              }}
            >
              <Typography component="span">Top Orders</Typography>

              <Typography
                color="error"
                component="span"
                sx={{
                  bgcolor: "#ffe1dd",
                  border: "1px solid #ffcea9",
                  borderRadius: "100px",
                  fontSize: "13px",
                  padding: "1.3px 8.3px",
                }}
              >
                -7.6%
              </Typography>
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontSize: 20,
                fontWeight: 700,
              }}
              className="text-black"
            >
              $72,458
            </Typography>
          </Box>

          <Typography sx={{ fontSize: "13px" }}>Last 7 days</Typography>
        </Box>

        <div
          style={{
            maxWidth: "150px",
            marginTop: "-52px",
            marginBottom: "-22px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {isChartLoaded && (
            <Chart
              options={options}
              series={series}
              type="bar"
              height={99}
              width={"100%"}
            />
          )}
        </div>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#605dff",
                  width: "20px",
                  height: "5px",
                  borderRadius: "7px",
                }}
              ></Box>
              <Typography sx={{ fontSize: "13px" }}>Completed</Typography>
            </Box>

            <Typography sx={{ fontSize: "13px" }}>62%</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "4px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#c2cdff",
                  width: "20px",
                  height: "5px",
                  borderRadius: "7px",
                }}
              ></Box>
              <Typography sx={{ fontSize: "13px" }}>Pending payment</Typography>
            </Box>

            <Typography sx={{ fontSize: "13px" }}>38%</Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TopOrders;
