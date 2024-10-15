"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalRevenue: React.FC = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Fashion",
      data: [20, 40, 25, 60, 30, 50],
    },
    {
      name: "Others",
      data: [20, 20, 25, 15, 35, 25],
    },
  ];

  const options: ApexOptions = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "55%",
      },
    },
    colors: ["#605DFF", "#C2CDFF"],
    grid: {
      show: true,
      borderColor: "#ffffff",
    },
    stroke: {
      width: 2,
      show: true,
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
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
    fill: {
      opacity: 1,
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
              <Typography component="span">Total Revenue</Typography>

              <Typography
                color="success"
                component="span"
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

            <Typography
              variant="h5"
              sx={{
                fontSize: 20,
                fontWeight: 700,
              }}
              className="text-black"
            >
              $165,458
            </Typography>
          </Box>

          <Typography sx={{ fontSize: "13px" }}>Last 30 days</Typography>
        </Box>

        <div
          style={{
            maxWidth: "200px",
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
              height={100}
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
              <Typography sx={{ fontSize: "13px" }} className="ml-10">
                Fashion
              </Typography>
            </Box>

            <Typography sx={{ fontSize: "13px" }}>75%</Typography>
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
              <Typography sx={{ fontSize: "13px" }} className="ml-10">
                Others
              </Typography>
            </Box>

            <Typography sx={{ fontSize: "13px" }}>25%</Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default TotalRevenue;
