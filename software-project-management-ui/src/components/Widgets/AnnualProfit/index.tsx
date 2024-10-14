"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AnnualProfit: React.FC = () => {
  const [isChartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    setChartLoaded(true);
  }, []);

  const series = [
    {
      name: "Revenue Growth",
      data: [3, 12, 8, 10, 15, 10, 7],
    },
  ];

  const options: ApexOptions = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#C52B09"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#ECEEF2",
    },
    stroke: {
      curve: "monotoneCubic",
      width: 1,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        formatter: (val) => {
          return "$" + val + "k";
        },
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
      position: "top",
      fontSize: "12px",
      horizontalAlign: "left",
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
        radius: 2,
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
            mb: "30px",
            position: "relative",
          }}
        >
          <Box>
            <Typography component="span" sx={{ mb: "3px", display: "block" }}>
              Annual Profit
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "18px", lg: "20px" },
                fontWeight: 700,
              }}
              className="text-black"
            >
              $879.6k
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "-28px",
              right: "-9px",
              maxWidth: "120px",
            }}
            className="crm-ap"
          >
            {isChartLoaded && (
              <Chart
                options={options}
                series={series}
                type="area"
                height={95}
                width={"100%"}
              />
            )}
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "5px",
            }}
          >
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
              +30%
            </Typography>

            <Typography component="span" sx={{ fontSize: "13px" }}>
              Last 12 months
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default AnnualProfit;
